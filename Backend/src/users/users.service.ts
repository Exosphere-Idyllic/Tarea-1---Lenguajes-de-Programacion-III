import { Injectable, ConflictException } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: any[] = [];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async create(user: any): Promise<User> {
    const existingUser = await this.findOne(user.username);
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    this.users.push(user);
    return user;
  }
}
