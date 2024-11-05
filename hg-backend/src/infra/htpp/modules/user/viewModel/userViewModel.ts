import { User } from '../../../../../modules/user/entities/User';

export class UserViewModel {
  static toHtpp({ id, name, email, createdAt }: User) {
    return {
      id,
      name,
      email,
      createdAt,
    };
  }
}
