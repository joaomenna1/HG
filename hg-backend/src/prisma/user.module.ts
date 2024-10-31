// user.module.ts
import { Module } from '@nestjs/common';
import { UserController } from '../controller/user/user.controller';
import { UserService } from '../services/user.service';
import { PrismaModule } from '../prisma/prisma.module'; // Certifique-se de que o caminho está correto

@Module({
  imports: [PrismaModule], // Importa o PrismaModule
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
