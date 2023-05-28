import { IEntity } from "domain/shared/IEntity";
export declare class UserPasswordModel implements IEntity {
    email?: string;
    old_password?: string;
    new_password?: string;
    constructor(email?: string, old_password?: string, new_password?: string);
    equals(entity: IEntity): boolean;
}
