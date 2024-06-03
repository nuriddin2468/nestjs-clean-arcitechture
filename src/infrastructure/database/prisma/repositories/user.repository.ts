import { AbstractUserRepository } from '@domain/users/abstracts/abstract-user-repository';
import { Role, Sex, UserEntity } from '@domain/users/entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';
import {
  PRISMA,
  PrismaType,
} from '@infrastructure/database/prisma/prisma.entity';

@Injectable()
export class UserRepository implements AbstractUserRepository {
  constructor(@Inject(PRISMA) private prisma: PrismaType) {}

  async createUser(user: Omit<UserEntity, 'id'>): Promise<UserEntity> {
    const newUser = await this.prisma.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        birthdate: user.birthdate,
        password: user.password,
        phone: user.phone,
        role: user.role,
        sex: user.sex,
        school: {
          connect: { id: user.schoolId },
        },
      },
    });

    return new UserEntity({
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      birthdate: newUser.birthdate,
      password: newUser.password,
      phone: newUser.phone,
      role: newUser.role as Role,
      sex: newUser.sex as Sex,
      schoolId: newUser.schoolId,
      deletedAt: newUser.deletedAt,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    });
  }

  deleteUser(user: UserEntity): Promise<UserEntity> {
    return Promise.resolve(undefined);
  }

  findUserByPhone(phoneNumber: string): Promise<UserEntity[]> {
    return Promise.resolve([]);
  }
}
