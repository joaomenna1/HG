import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { UserModule } from './infra/htpp/modules/user/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  providers: [],
  exports: [],
})
export class AppModule {}
