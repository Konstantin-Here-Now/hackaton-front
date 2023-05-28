import { IEntity } from "domain/shared/IEntity";

export class JobIdModel implements IEntity {
    job_id: number;


    constructor(
        job_id: number
    ){
        this.job_id = job_id;
    }

    equals(entity: IEntity): boolean {
        if (!(entity instanceof JobIdModel)) return false;
        return this.job_id === entity.job_id;
      }
}