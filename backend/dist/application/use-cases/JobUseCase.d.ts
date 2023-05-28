import { IJobRepository } from "application/ports/IJobRepository";
import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
import { AuthUseCase } from "./AuthUseCases";
import { JobDocument } from "infrastructure/schemas/job.schema";
import { Model } from "mongoose";
import { JobModel } from "domain/models/JobModel";
import { JobStatusModel } from "domain/models/JobStatusModel";
import { JobIdModel } from "domain/models/JobIdModel";
export declare class JobUsecase {
    private readonly jobRepo;
    private readonly authUseCase;
    private model;
    private readonly logger;
    serviceRes: ServiceResponse;
    constructor(jobRepo: IJobRepository, authUseCase: AuthUseCase, model: Model<JobDocument>);
    addJob(token: string, data: JobModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getJob(token: string): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getJobById(job_id: number): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addJobRes(token: string, data: JobIdModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    updateJobStatus(token: string, data: JobStatusModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getJobRes(token: string): Promise<{
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
}
