"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const JobUseCase_1 = require("../../application/use-cases/JobUseCase");
const JobIdModel_1 = require("../../domain/models/JobIdModel");
const JobModel_1 = require("../../domain/models/JobModel");
const JobStatusModel_1 = require("../../domain/models/JobStatusModel");
let JobController = class JobController {
    constructor(jobUsecase) {
        this.jobUsecase = jobUsecase;
    }
    async addJob(token, data) {
        const result = await this.jobUsecase.addJob(token, data);
        return result;
    }
    async getDetail(id) {
        const result = await this.jobUsecase.getJobById(id);
        return result;
    }
    async getJob(token) {
        const result = await this.jobUsecase.getJob(token);
        return result;
    }
    async addJobRes(token, data) {
        const result = await this.jobUsecase.addJobRes(token, data);
        return result;
    }
    async updateJobStatus(token, data) {
        const result = await this.jobUsecase.updateJobStatus(token, data);
        return result;
    }
    async getAllJob() {
        const result = await this.jobUsecase.getAllJob();
        return result;
    }
    async getJobRes(token) {
        const result = await this.jobUsecase.getJobRes(token);
        return result;
    }
};
__decorate([
    (0, common_1.Post)("add/:token"),
    __param(0, (0, common_1.Param)("token")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, JobModel_1.JobModel]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "addJob", null);
__decorate([
    (0, common_1.Get)("detail/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getDetail", null);
__decorate([
    (0, common_1.Get)("get/:token"),
    __param(0, (0, common_1.Param)("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getJob", null);
__decorate([
    (0, common_1.Post)("add/res/:token"),
    __param(0, (0, common_1.Param)("token")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, JobIdModel_1.JobIdModel]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "addJobRes", null);
__decorate([
    (0, common_1.Put)("update/res/:token"),
    __param(0, (0, common_1.Param)("token")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, JobStatusModel_1.JobStatusModel]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "updateJobStatus", null);
__decorate([
    (0, common_1.Get)("get"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getAllJob", null);
__decorate([
    (0, common_1.Get)("/res/:token"),
    __param(0, (0, common_1.Param)("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getJobRes", null);
JobController = __decorate([
    (0, swagger_1.ApiTags)("Job"),
    (0, common_1.Controller)("job"),
    __metadata("design:paramtypes", [JobUseCase_1.JobUsecase])
], JobController);
exports.JobController = JobController;
//# sourceMappingURL=JobController.js.map