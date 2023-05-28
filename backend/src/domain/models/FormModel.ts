import { IEntity } from "domain/shared/IEntity";
import { StringNullableChain } from "lodash";
import { concatAll } from "rxjs";


export class FormModel implements IEntity {
    spec: {
        specialisation: string,
        salary: number
    };
  
    contacts: {
        first_name: string;
        last_name: string;
        city: string;
    }
   
    
    user_id?: number

    constructor(
        spec,
        contacts,
        user_id? 
    ) {
        this.spec = spec;
        this.contacts = contacts;
        
        this.user_id = user_id
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof FormModel)) return false;
        return this.user_id === entity.user_id;
      }
     
}