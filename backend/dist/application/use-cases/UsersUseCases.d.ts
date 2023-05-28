import { IUsersRepository } from "application/ports/IUsersRepository";
import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
import Redis from "ioredis";
import { AuthUseCase } from "./AuthUseCases";
import { UserModel } from "domain/models/UserModel";
import { UserPasswordModel } from "domain/models/UserPasswordModel";
export declare class UsersUseCases {
    private readonly usersRepository;
    private readonly authService;
    private readonly redis;
    private readonly logger;
    serviceRes: ServiceResponse;
    constructor(usersRepository: IUsersRepository, authService: AuthUseCase, redis: Redis);
    sign(user: UserModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    login(user: UserModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    updatePassword(user: UserPasswordModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
