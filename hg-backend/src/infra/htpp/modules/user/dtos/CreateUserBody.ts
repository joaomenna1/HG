import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
