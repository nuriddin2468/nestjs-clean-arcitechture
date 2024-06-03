import { AbstractUserRepository } from '@domain/users/abstracts/abstract-user-repository';
import { UserEntity } from '@domain/users/entities/user.entity';
import { Response } from '@domain/_shared/response/response';
import {
  responseError,
  responseOk,
} from '@domain/_shared/response/create-response';
import { HttpStatusCode } from '@domain/_shared/response/http-status';

export class UserUseCase {
  constructor(
    private userRepository: AbstractUserRepository,
    private currentUser?: UserEntity,
  ) {}

  async create(user: UserEntity): Promise<Response<UserEntity>> {
    if (!this.currentUser?.isAdmin())
      return responseError(
        'Only admin can create a user',
        HttpStatusCode.FORBIDDEN,
      );

    const foundUser = await this.userRepository.findUserByPhone(user.phone);

    if (foundUser)
      return responseError(
        'User with this phone is exists',
        HttpStatusCode.BAD_REQUEST,
      );

    let newUser: UserEntity;
    try {
      newUser = await this.userRepository.createUser(await user.hashPassword());
    } catch (e) {
      return responseError(
        'Something went wrong on creating user',
        HttpStatusCode.BAD_REQUEST,
        e,
      );
    }
    return responseOk(newUser, HttpStatusCode.CREATED);
  }

  async deleteUser(userId: number): Promise<Response<UserEntity>> {
    if (!this.currentUser?.isAdmin())
      return responseError(
        'Only admin can delete a user',
        HttpStatusCode.FORBIDDEN,
      );

    try {
      return responseOk(
        await this.userRepository.deleteUser(userId),
        HttpStatusCode.OK,
      );
    } catch (e) {
      return responseError(
        'Could not delete user',
        HttpStatusCode.NOT_MODIFIED,
        e,
      );
    }
  }
}
