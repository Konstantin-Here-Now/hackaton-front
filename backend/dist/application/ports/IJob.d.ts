export declare abstract class IJob<Entity> {
    abstract addJob(user_id: number, entity: Entity): any;
    abstract getJob(id: number): any;
    abstract getUserRole(id: number): any;
    abstract addJobRes(job_id: number, user_id: number): any;
    abstract getJobRes(user_id: number): any;
    abstract getJobById(job_id: number): any;
    abstract checkJobIdUserIdExists(job_id: number, user_id: number): any;
    abstract updateJobStatus(job_id: number, user_id: number, status: string): any;
    abstract getAllJobs(): any;
}
