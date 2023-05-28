import { IEntity } from "domain/shared/IEntity";


export class UserPasswordModel implements IEntity {
    email?: string;
    old_password?: string;
    new_password?: string;
    
    constructor(email?: string, old_password?: string, new_password?: string){
        this.email = email;
        this.old_password = old_password;
        this.new_password = new_password;
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof UserPasswordModel)) return false;
        return this.email == entity.email;
      }
    

}