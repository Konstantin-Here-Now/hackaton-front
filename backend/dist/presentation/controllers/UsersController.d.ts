import { UsersUseCases } from 'application/use-cases/UsersUseCases';
import { UserModel } from 'domain/models/UserModel';
import { UserPasswordModel } from 'domain/models/UserPasswordModel';
export declare class UsersController {
    private readonly usersUseCases;
    constructor(usersUseCases: UsersUseCases);
    sign(data: UserModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    login(data: UserModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    changePassword(data: UserPasswordModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
