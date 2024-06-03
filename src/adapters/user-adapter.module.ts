import { Module } from '@nestjs/common';

import { Provider } from '@nestjs/common';
import { UserUseCase } from '@domain/users/use-cases/user.use-case';
import { UserRepository } from '@infrastructure/database/prisma/repositories/user.repository';
import { prismaProvider } from '@infrastructure/database/prisma/prisma.module';

export const USER_USE_CASE = Symbol('USER_USE_CASE');

const userAdapter: Provider = {
  provide: USER_USE_CASE,
  useFactory: (userRepository: UserRepository) =>
    new UserUseCase(userRepository, 1 as any),
  inject: [UserRepository],
};

@Module({
  providers: [UserRepository, prismaProvider, userAdapter],
  exports: [UserRepository, prismaProvider, userAdapter],
})
export class UserAdapterModule {}
