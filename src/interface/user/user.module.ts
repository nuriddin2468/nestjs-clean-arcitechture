import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserAdapterModule } from '@adapters/user-adapter.module';

@Module({
  controllers: [UserController],
  imports: [UserAdapterModule],
})
export class UserModule {}
