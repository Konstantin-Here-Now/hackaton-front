import { IEntity } from "domain/shared/IEntity";
export declare class JobStatusModel implements IEntity {
    job_id: number;
    status: string;
    constructor(job_id: number, status: string);
    equals(entity: IEntity): boolean;
}
