import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(authcredentialsDto: AuthCredentialsDto) {
    const username = await this.userRepository.validateUserPassword(
      authcredentialsDto,
    );

    if (!username) {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }
}
