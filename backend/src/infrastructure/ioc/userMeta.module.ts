import { Module } from '@nestjs/common';
import { IUsersMetaReposiotry } from 'application/ports/IUsersMetaRepository';
import { IUsersRepository } from 'application/ports/IUsersRepository';
import { AuthUseCase } from 'application/use-cases/AuthUseCases';
import { UserMetaUsecase } from 'application/use-cases/UserMetaUsecase';
import { UsersUseCases } from 'application/use-cases/UsersUseCases';
import { UserMetaRepository } from 'infrastructure/database/repositories/UserMetaRepository';
import { UsersRepository } from 'infrastructure/database/repositories/UsersRepository';
import { UserMetaController } from 'presentation/controllers/UserMetaController';
import { UsersModule } from './users.module';
import { AuthModule } from './auth.module';
import { UsersController } from 'presentation/controllers/UsersController';
import { UserModel } from 'domain/models/UserModel';

@Module({
  imports: [],
  controllers: [UserMetaController],
  providers: [
    AuthUseCase,
    UserMetaUsecase,
    { provide: IUsersMetaReposiotry, useClass: UserMetaRepository},
  ],
})
export class UserMetaModule {}
