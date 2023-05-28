import { Module } from "@nestjs/common";
import { IJobRepository } from "application/ports/IJobRepository";
import { AuthUseCase } from "application/use-cases/AuthUseCases";
import { JobUsecase } from "application/use-cases/JobUseCase";
import { JobRepository } from "infrastructure/database/repositories/JobRepository";
import { JobController } from "presentation/controllers/JobController";
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from "infrastructure/schemas/job.schema";


@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost:27017'),
    MongooseModule.forFeature([{name: Job.name, schema: JobSchema}])],
    controllers: [JobController],
    providers: [
      JobUsecase,
      AuthUseCase,
      { provide: IJobRepository, useClass: JobRepository},
    ],
  })
  export class JobModule {}
  