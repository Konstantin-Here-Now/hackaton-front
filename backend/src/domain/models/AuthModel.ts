import { IEntity } from "domain/shared/IEntity";
import { throwIfEmpty } from "rxjs";


export class AuthModel implements IEntity {
     token?: string;
     

     constructor(
        token?: string
     ){
        this.token = token;
     }
     equals(entity: IEntity): boolean {
        if (!(entity instanceof AuthModel)) return false;
        return this.token === entity.token;
      }
}