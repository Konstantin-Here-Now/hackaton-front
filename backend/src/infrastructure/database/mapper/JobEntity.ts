import { JobModel } from "domain/models/JobModel";
import { Entity, EntitySchema } from "typeorm";
import { BaseEntity } from "./BaseEntity";


export const JobEntity = new EntitySchema<JobModel>({
    name: "Job",
    tableName: "job",
    target: JobModel,
    columns: {
        ...BaseEntity,
        job_name: {
            type: String,
            length: 100
        }
    }
})