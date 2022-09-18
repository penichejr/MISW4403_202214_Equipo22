/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Role } from './role.enum';
import { User } from './user';

@Injectable()
export class UserService {
  private users: User[] = [
    new User(1, "admin", "admin", [Role.ADMIN]),
    new User(2, "user", "admin", [Role.USER])
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
