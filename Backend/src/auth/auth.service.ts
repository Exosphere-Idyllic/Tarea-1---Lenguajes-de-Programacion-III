import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    
    // In a real application, you'd use bcrypt.compare() to check the hashed password
    if (user?.password !== pass) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    const { password, ...result } = user;
    
    // In a real app, generate and return a JWT token here
    return {
      message: 'Login successful',
      user: result,
      access_token: 'mock-jwt-token-12345', 
    };
  }

  async signUp(username: string, pass: string): Promise<any> {
    // In a real application, you'd hash the password with bcrypt before saving
    const newUser = {
      id: Math.random().toString(36).substring(7),
      username,
      password: pass, // Should be hashed!
    };
    
    const createdUser = await this.usersService.create(newUser);
    const { password, ...result } = createdUser;
    
    return {
      message: 'User registered successfully',
      user: result,
      access_token: 'mock-jwt-token-12345',
    };
  }
}
