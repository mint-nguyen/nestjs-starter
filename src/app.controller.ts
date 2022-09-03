import { AuthService } from './auth/auth.service';
import { Controller } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
}
