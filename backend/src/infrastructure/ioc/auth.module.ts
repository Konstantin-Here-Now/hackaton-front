// JwtModule.register({
//     global: true,
//     secret: jwtConstants.secret,
//     signOptions: { expiresIn: '60s' },
//   }),

import { Module } from "@nestjs/common";
import { AuthUseCase } from "application/use-cases/AuthUseCases";
import { UserModel } from "domain/models/UserModel";
import { UsersModule } from "./users.module";
import { UsersUseCases } from "application/use-cases/UsersUseCases";
import { IUsersRepository } from "application/ports/IUsersRepository";
import { UsersRepository } from "infrastructure/database/repositories/UsersRepository";


@Module({
    imports:[],
    providers: [
        AuthUseCase,
        UsersUseCases,
        {provide: IUsersRepository, useClass: UsersRepository},

    ]
})
export class AuthModule {}