import { IUsersMetaReposiotry } from "application/ports/IUsersMetaRepository";
import { UserExceptions } from "domain/exceptions/UserExceptions";
import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
import { AuthUseCase } from "./AuthUseCases";
import { FormModel } from "domain/models/FormModel";
import { PlaceWorkModel } from "domain/models/PlaceWorkModel";
export declare class UserMetaUsecase {
    private readonly userMetaRepo;
    private readonly authUseCase;
    private readonly logger;
    userException: UserExceptions;
    serviceRes: ServiceResponse;
    constructor(userMetaRepo: IUsersMetaReposiotry, authUseCase: AuthUseCase);
    addUserForm(token: string, entity: FormModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addUserPlaceWork(token: string, entity: Array<PlaceWorkModel>): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getUserForm(token: string): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getUserRole(token: string): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
