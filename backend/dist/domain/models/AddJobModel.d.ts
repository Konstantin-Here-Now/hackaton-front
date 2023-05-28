import { IEntity } from "domain/shared/IEntity";
export declare class AddJobModel implements IEntity {
    profession: string;
    company: string;
    city: string;
    salary: string;
    user_id: number;
    constructor(profession: string, company: string, city: string, salary: string, user_id: number);
    equals(entity: IEntity): boolean;
}
