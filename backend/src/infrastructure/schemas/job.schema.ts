import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type JobDocument = Job & Document;

@Schema({timestamps: true})
export class Job {
    @Prop({required: true})
    job_id: number;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    tasks: string;

    @Prop({required: true})
    important: string;

    @Prop({required: true})
    plus: string;

    @Prop({required: true})
    conditions: string;

    @Prop({required: true})
    key_skills: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);