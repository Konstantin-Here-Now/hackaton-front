import { IEntity } from "domain/shared/IEntity";

export class UserModel implements IEntity {
    email?: string;
    password?: string;
    role?: string;
    

    constructor(email?: string, password?: string, role?: string){
        this.email = email;
        this.password = password;
        this.role = role;

    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof UserModel)) return false;
        return this.email == entity.email;
      }
}