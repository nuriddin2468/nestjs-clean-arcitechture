import { Controller, Inject } from '@nestjs/common';
import { UserUseCase } from '@domain/users/use-cases/user.use-case';
import { USER_USE_CASE } from '@adapters/user-adapter.module';

@Controller('user')
export class UserController {
  constructor(@Inject(USER_USE_CASE) private userUseCase: UserUseCase) {}

  createUser() {
    // return this.userUseCase.create();
  }
}
