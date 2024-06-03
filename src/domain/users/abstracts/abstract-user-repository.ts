import { UserEntity } from '@domain/users/entities/user.entity';

export abstract class AbstractUserRepository {
  abstract findUserByPhone(phoneNumber: string): Promise<UserEntity | null>;
  abstract createUser(user: Omit<UserEntity, 'id'>): Promise<UserEntity>;
  abstract deleteUser(userId: number): Promise<UserEntity>;
}
