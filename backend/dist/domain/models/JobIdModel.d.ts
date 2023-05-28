import { IEntity } from "domain/shared/IEntity";
export declare class JobIdModel implements IEntity {
    job_id: number;
    constructor(job_id: number);
    equals(entity: IEntity): boolean;
}
