import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class IJob<Entity>{
    abstract addJob(user_id: number,entity: Entity);
    abstract getJob(id: number);
    abstract getUserRole(id: number);
    abstract addJobRes(job_id: number,user_id: number);
    abstract getJobRes(user_id: number);
    abstract getJobById(job_id: number);
    abstract checkJobIdUserIdExists(job_id: number, user_id: number);
    abstract updateJobStatus(job_id: number, user_id: number, status: string);
    abstract getAllJobs();
}   