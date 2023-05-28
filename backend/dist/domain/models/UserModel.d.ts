import { IEntity } from "domain/shared/IEntity";
export declare class UserModel implements IEntity {
    email?: string;
    password?: string;
    role?: string;
    constructor(email?: string, password?: string, role?: string);
    equals(entity: IEntity): boolean;
}
