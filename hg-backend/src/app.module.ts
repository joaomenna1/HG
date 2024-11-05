import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { UserModule } from './infra/htpp/modules/user/user.module';
import { AuthModule } from './infra/htpp/modules/auth/auth.module';
import { JwtAuthGuard } from './infra/htpp/modules/auth/guards/jwtAuth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [],
})
export class AppModule {}
