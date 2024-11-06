import { IsEmailCustom } from 'src/infra/htpp/classValidator/classValidator/decorators/IsEmailCustom';
import { IsNotEmptyCustom } from 'src/infra/htpp/classValidator/classValidator/decorators/IsNotEmptyCustom';
import { IsStringCustom } from 'src/infra/htpp/classValidator/classValidator/decorators/IsStringCustom';
import { MinLengthCustom } from 'src/infra/htpp/classValidator/classValidator/decorators/MinLengthCustom';

export class SignInBody {
  @IsNotEmptyCustom()
  @IsStringCustom()
  @IsEmailCustom()
  email: string;

  @IsStringCustom()
  @MinLengthCustom(5)
  password: string;
}
