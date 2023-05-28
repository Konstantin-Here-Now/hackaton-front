import { IEntity } from "domain/shared/IEntity";
export declare class JobModel implements IEntity {
    job_name: string;
    salary: number;
    requiered_exp: string;
    emploitment: string;
    company: string;
    description: string;
    tasks: string;
    important: string;
    plus: string;
    conditions: string;
    key_skills: string;
    city: string;
    job_id?: number;
    constructor(job_name: string, salary: number, requiered_exp: string, emploitment: string, company: string, description: string, tasks: string, important: string, plus: string, conditions: string, key_skills: string, city: string, job_id?: number);
    equals(entity: IEntity): boolean;
}
