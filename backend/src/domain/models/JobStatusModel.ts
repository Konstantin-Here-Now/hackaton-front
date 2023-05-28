import { IEntity } from "domain/shared/IEntity";



export class JobStatusModel implements IEntity{
    job_id: number;
    status: string;

    constructor(
        job_id: number,
        status: string
    ) {
        this.job_id = job_id;
        this.status = status;
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof JobStatusModel)) return false;
        return this.job_id === entity.job_id;
      }

}