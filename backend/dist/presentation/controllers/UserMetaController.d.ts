import { UserMetaUsecase } from "application/use-cases/UserMetaUsecase";
import { FormModel } from "domain/models/FormModel";
import { PlaceWorkModel } from "domain/models/PlaceWorkModel";
export declare class UserMetaController {
    private readonly userMetaUsecase;
    constructor(userMetaUsecase: UserMetaUsecase);
    addUserForm(token: any, data: FormModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addUserPlace(token: any, data: Array<PlaceWorkModel>): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getUserForms(token: any): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getUserRole(token: any): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
