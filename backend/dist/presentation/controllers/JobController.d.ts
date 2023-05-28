import { JobUsecase } from "application/use-cases/JobUseCase";
import { JobIdModel } from "domain/models/JobIdModel";
import { JobModel } from "domain/models/JobModel";
import { JobStatusModel } from "domain/models/JobStatusModel";
export declare class JobController {
    private readonly jobUsecase;
    constructor(jobUsecase: JobUsecase);
    addJob(token: any, data: JobModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getDetail(id: any): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getJob(token: any): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addJobRes(token: any, data: JobIdModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    updateJobStatus(token: any, data: JobStatusModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getAllJob(): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
        Content: object;
    }>;
    getJobRes(token: any): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
