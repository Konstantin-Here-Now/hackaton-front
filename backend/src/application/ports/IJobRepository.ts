import { Injectable } from "@nestjs/common";
import { JobModel } from "domain/models/JobModel";
import { IJob } from "./IJob";



@Injectable()
export abstract class IJobRepository extends IJob<JobModel> {}
