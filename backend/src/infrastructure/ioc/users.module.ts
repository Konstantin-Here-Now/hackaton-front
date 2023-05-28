
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { IUsersRepository } from 'application/ports/IUsersRepository';
import { UsersUseCases } from 'application/use-cases/UsersUseCases';
import { UsersRepository } from 'infrastructure/database/repositories/UsersRepository';
import { jwtConstants } from 'infrastructure/utils/secretsConstant';
import { UsersController } from 'presentation/controllers/UsersController';
import { AuthModule } from './auth.module';
import { AuthUseCase } from 'application/use-cases/AuthUseCases';

@Module({
  imports: [
    AuthModule,
    RedisModule.forRoot({
      readyLog: true,
      config: {
        host: 'localhost',
        port: 6379,
      },
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UsersController],
  providers: [
    UsersUseCases,
    AuthUseCase,
    { provide: IUsersRepository, useClass: UsersRepository },
  ],
})
export class UsersModule {}
