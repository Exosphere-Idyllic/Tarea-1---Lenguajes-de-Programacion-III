import { Injectable, ConflictException } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: any[] = [];

  async findOne(correo: string): Promise<User | undefined> {
    return this.users.find(user => user.correo === correo);
  }

  async create(user: any): Promise<User> {
    const existingUser = await this.findOne(user.correo);
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    this.users.push(user);
    return user;
  }
}