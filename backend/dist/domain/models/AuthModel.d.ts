import { IEntity } from "domain/shared/IEntity";
export declare class AuthModel implements IEntity {
    token?: string;
    constructor(token?: string);
    equals(entity: IEntity): boolean;
}
