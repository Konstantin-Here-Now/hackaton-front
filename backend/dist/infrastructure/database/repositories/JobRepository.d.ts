import { BaseRepository } from "./BaseRepository";
import { JobModel } from "domain/models/JobModel";
import { IJobRepository } from "application/ports/IJobRepository";
import { Connection } from "typeorm";
export declare class JobRepository extends BaseRepository<JobModel> implements IJobRepository {
    connection: Connection;
    constructor(connection: Connection);
    getUserRole(id: number): Promise<any>;
    addJob(user_id: number, entity: JobModel): Promise<any>;
    getJob(id: number): Promise<any>;
    addJobRes(job_id: number, user_id: number): Promise<any>;
    getJobRes(user_id: number): Promise<any>;
    getJobById(job_id: number): Promise<any>;
    checkJobIdUserIdExists(job_id: number, user_id: number): Promise<any>;
    updateJobStatus(job_id: number, user_id: number, status: string): Promise<any>;
    getAllJobs(): Promise<any>;
}
