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
var JobUsecase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobUsecase = void 0;
const common_1 = require("@nestjs/common");
const IJobRepository_1 = require("../ports/IJobRepository");
const ServiceResponse_1 = require("../../infrastructure/utils/ServiceResponse");
const AuthUseCases_1 = require("./AuthUseCases");
const job_schema_1 = require("../../infrastructure/schemas/job.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let JobUsecase = JobUsecase_1 = class JobUsecase {
    constructor(jobRepo, authUseCase, model) {
        this.jobRepo = jobRepo;
        this.authUseCase = authUseCase;
        this.model = model;
        this.logger = new common_1.Logger(JobUsecase_1.name);
        this.serviceRes = new ServiceResponse_1.ServiceResponse();
    }
    async addJob(token, data) {
        const id = this.authUseCase.decryptJwt(token);
        this.logger.log(`Верифицируем пользователя`);
        const user = await this.jobRepo.getUserRole(id);
        if (user.name == "business") {
            this.logger.log(`Добавляем данные вакансии`);
            const result = await this.jobRepo.addJob(id, data);
            if (result) {
                this.logger.log(`Добавляем метаинформацию по вакансии`);
                data.job_id = result.id;
                this.model.create(data);
                return this.serviceRes.metaSuccessfulyAdded();
            }
            else {
                this.logger.log(`ЧТо-то пошло не так в добалении данных`);
                return this.serviceRes.internalServerError();
            }
        }
        else {
            this.logger.log(`Пользователь не авторизован`);
            return this.serviceRes.userNotAuthorisated();
        }
    }
    async getJob(token) {
        let job_all_res = [];
        const id = this.authUseCase.decryptJwt(token);
        this.logger.log(`Верифицируем пользователя`);
        const user = await this.jobRepo.getUserRole(id);
        if (user.name === "business") {
            this.logger.log(`Получаем данные о вакансии`);
            const result = await this.jobRepo.getJob(id);
            if (result) {
                this.logger.log(`Информация получена`);
                for (let i = 0; i < result.length; i++) {
                    this.logger.log(`Получаем информацию из mongo`);
                    const metaInfo = await this.model.findOne({ job_id: result[i].id });
                    if (metaInfo) {
                        job_all_res.push({
                            company_name: result[i].company_name,
                            profession_name: result[i].profession_name,
                            city_name: result[i].city_name,
                            salary: result[i].salary,
                            description: metaInfo.description,
                            tasks: metaInfo.tasks,
                            important: metaInfo.important,
                            plus: metaInfo.plus,
                            conditions: metaInfo.conditions,
                            key_skills: metaInfo.key_skills,
                        });
                    }
                    else {
                        job_all_res.push({
                            company_name: result[i].company_name,
                            profession_name: result[i].profession_name,
                            city_name: result[i].city_name,
                            salary: result[i].salary,
                        });
                    }
                }
                this.logger.log(`Информация получена`);
                return this.serviceRes.uniqueSuccessRes(job_all_res);
            }
            else {
                this.logger.log(`Информация не найдена`);
                return this.serviceRes.jobInfoNotFound();
            }
        }
        else {
            this.logger.log(`Пользователь не авторизован`);
            return this.serviceRes.userNotAuthorisated();
        }
    }
    async getJobById(job_id) {
        this.logger.log(`Получаем информацию о вакансии`);
        const result = await this.jobRepo.getJobById(job_id);
        if (result) {
            this.logger.log(`Поучаем мета-информацию по вакансии`);
            const metaInfo = await this.model.findOne({ job_id: result.id });
            if (metaInfo) {
                this.logger.log(`Описание из mongodb получено`);
                const allJobResult = {
                    company_name: result.company_name,
                    profession_name: result.profession_name,
                    city_name: result.city_name,
                    salary: result.salary,
                    description: metaInfo.description,
                    tasks: metaInfo.tasks,
                    important: metaInfo.important,
                    plus: metaInfo.plus,
                    conditions: metaInfo.conditions,
                    key_skills: metaInfo.key_skills,
                };
                return this.serviceRes.uniqueSuccessRes(allJobResult);
            }
            else {
                this.logger.log(`Описание не найдено`);
                const allJobResult = {
                    company_name: result.company_name,
                    profession_name: result.profession_name,
                    city_name: result.city_name,
                    salary: result.salary,
                };
                return this.serviceRes.uniqueSuccessRes(allJobResult);
            }
        }
        else {
            this.logger.log(`Данные по вакансии не получены`);
            return this.serviceRes.jobInfoNotFound();
        }
    }
    async addJobRes(token, data) {
        const id = this.authUseCase.decryptJwt(token);
        this.logger.log(`Верифицируем пользователя`);
        const user = await this.jobRepo.getUserRole(id);
        if (user.name == "user") {
            this.logger.log(`Добавляем статус`);
            const result = await this.jobRepo.addJobRes(data.job_id, id);
            return this.serviceRes.responsesAddSuccess();
        }
        else {
            this.logger.log(`Пользователь не верифицирован`);
            return this.serviceRes.userNotAuthorisated();
        }
    }
    async updateJobStatus(token, data) {
        const id = this.authUseCase.decryptJwt(token);
        this.logger.log(`Верифицируем пользователя`);
        const user = await this.jobRepo.getUserRole(id);
        if (user.name == 'hr') {
            this.logger.log(`Обновляем статус`);
            const result = await this.jobRepo.updateJobStatus(data.job_id, id, data.status);
            return this.serviceRes.statusUpdated();
        }
        else {
            this.logger.log(`Пользователь не авторизован`);
            return this.serviceRes.userNotAuthorisated();
        }
    }
    async getJobRes(token) {
        const id = this.authUseCase.decryptJwt(token);
        this.logger.log(`Верифицируем пользователя`);
        const user = await this.jobRepo.getUserRole(id);
        if (user.name == "user") {
            const result = await this.jobRepo.getJobRes(id);
            if (result) {
                this.logger.log("Данные получены");
                return this.serviceRes.uniqueSuccessRes(result);
            }
            else {
                this.logger.log("Отлики не найдены");
                return this.serviceRes.jobInfoNotFound();
            }
        }
        else {
            this.logger.log(`Пользователь не имеет доступа`);
            return this.serviceRes.userNotAuthorisated();
        }
    }
    async getAllJob() {
        this.logger.log(`Получаем информацию о вакансиях`);
        const result = await this.jobRepo.getAllJobs();
        if (result) {
            this.logger.log(`Данные получены`);
            return this.serviceRes.uniqueSuccessRes(result);
        }
        else {
            this.logger.log(`Информация не получена`);
            this.serviceRes.internalServerError();
        }
    }
};
JobUsecase = JobUsecase_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, mongoose_1.InjectModel)(job_schema_1.Job.name)),
    __metadata("design:paramtypes", [IJobRepository_1.IJobRepository,
        AuthUseCases_1.AuthUseCase,
        mongoose_2.Model])
], JobUsecase);
exports.JobUsecase = JobUsecase;
//# sourceMappingURL=JobUseCase.js.map