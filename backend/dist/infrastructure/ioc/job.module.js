"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobModule = void 0;
const common_1 = require("@nestjs/common");
const IJobRepository_1 = require("../../application/ports/IJobRepository");
const AuthUseCases_1 = require("../../application/use-cases/AuthUseCases");
const JobUseCase_1 = require("../../application/use-cases/JobUseCase");
const JobRepository_1 = require("../database/repositories/JobRepository");
const JobController_1 = require("../../presentation/controllers/JobController");
const mongoose_1 = require("@nestjs/mongoose");
const job_schema_1 = require("../schemas/job.schema");
let JobModule = class JobModule {
};
JobModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017'),
            mongoose_1.MongooseModule.forFeature([{ name: job_schema_1.Job.name, schema: job_schema_1.JobSchema }])],
        controllers: [JobController_1.JobController],
        providers: [
            JobUseCase_1.JobUsecase,
            AuthUseCases_1.AuthUseCase,
            { provide: IJobRepository_1.IJobRepository, useClass: JobRepository_1.JobRepository },
        ],
    })
], JobModule);
exports.JobModule = JobModule;
//# sourceMappingURL=job.module.js.map