import { IEntity } from "domain/shared/IEntity";


export class AddJobModel implements IEntity {
    profession: string;
    company: string;
    city: string;
    salary: string;
    user_id: number;
    
    constructor(
        profession: string,
        company: string,
        city: string,
        salary: string,
        user_id: number 
    ) {
        this.profession = profession;
        this.company = company;
        this.city = city;
        this.salary = salary;
        this.user_id = user_id;
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof AddJobModel)) return false;
        return this.user_id === entity.user_id;
      }
}