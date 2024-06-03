import { Module } from '@nestjs/common';
import { UserModule } from '@interface/user/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
