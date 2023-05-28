import { Injectable, Logger } from "@nestjs/common";
import { IJobRepository } from "application/ports/IJobRepository";
import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
import { AuthUseCase } from "./AuthUseCases";
import { Job, JobDocument } from "infrastructure/schemas/job.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JobModel } from "domain/models/JobModel";
import { JobStatusModel } from "domain/models/JobStatusModel";
import { JobIdModel } from "domain/models/JobIdModel";

@Injectable()
export class JobUsecase {
  private readonly logger = new Logger(JobUsecase.name);
  public serviceRes = new ServiceResponse();
  constructor(
    private readonly jobRepo: IJobRepository,
    private readonly authUseCase: AuthUseCase,
    @InjectModel(Job.name) private model: Model<JobDocument>
  ) {}

  async addJob(token: string, data: JobModel) {
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
      } else {
        this.logger.log(`ЧТо-то пошло не так в добалении данных`);
        return this.serviceRes.internalServerError();
      }
    } else {
      this.logger.log(`Пользователь не авторизован`);
      return this.serviceRes.userNotAuthorisated();
    }
  }

  async getJob(token: string) {
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
          } else {
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
      } else {
        this.logger.log(`Информация не найдена`);
        return this.serviceRes.jobInfoNotFound();
      }
    } else {
      this.logger.log(`Пользователь не авторизован`);
      return this.serviceRes.userNotAuthorisated();
    }
  }

  async getJobById(job_id: number) {
    this.logger.log(`Получаем информацию о вакансии`);
    const result = await this.jobRepo.getJobById(job_id);
    if (result) {
      this.logger.log(`Поучаем мета-информацию по вакансии`);
      const metaInfo = await this.model.findOne({ job_id: result.id });
      if(metaInfo){
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
        }
        return this.serviceRes.uniqueSuccessRes(allJobResult);
        
      }
      else{
        this.logger.log(`Описание не найдено`);
        const allJobResult = {
          company_name: result.company_name,
                profession_name: result.profession_name,
                city_name: result.city_name,
                salary: result.salary,
        }
        return this.serviceRes.uniqueSuccessRes(allJobResult);
        
      }
      
    } else {
      this.logger.log(`Данные по вакансии не получены`);
      return this.serviceRes.jobInfoNotFound();
    }
  }

  async addJobRes(token: string, data: JobIdModel) {
    const id = this.authUseCase.decryptJwt(token);
    this.logger.log(`Верифицируем пользователя`);
    const user = await this.jobRepo.getUserRole(id);

    if (user.name == "user") {
      this.logger.log(`Добавляем статус`);
      const result = await this.jobRepo.addJobRes(data.job_id, id);
      return this.serviceRes.responsesAddSuccess();
    } else {
      this.logger.log(`Пользователь не верифицирован`);
      return this.serviceRes.userNotAuthorisated();
    }
  }

  async updateJobStatus(token: string, data: JobStatusModel){
    const id = this.authUseCase.decryptJwt(token);
    this.logger.log(`Верифицируем пользователя`);
    const user = await this.jobRepo.getUserRole(id);
    if(user.name == 'hr'){
      this.logger.log(`Обновляем статус`);
      const result = await this.jobRepo.updateJobStatus(data.job_id, id, data.status);
      return this.serviceRes.statusUpdated();
    }
    else{
      this.logger.log(`Пользователь не авторизован`);
      return this.serviceRes.userNotAuthorisated();
    }
  }

  async getJobRes(token: string) {
    const id = this.authUseCase.decryptJwt(token);
    this.logger.log(`Верифицируем пользователя`);
    const user = await this.jobRepo.getUserRole(id);
    if (user.name == "user") {
      const result = await this.jobRepo.getJobRes(id);
      if(result){
        this.logger.log("Данные получены");
        return this.serviceRes.uniqueSuccessRes(result);
      }
      else{
        this.logger.log("Отлики не найдены");
        return this.serviceRes.jobInfoNotFound();
      }
      
    } else {
      this.logger.log(`Пользователь не имеет доступа`);
      return this.serviceRes.userNotAuthorisated();
    }
  }

  async getAllJob(){
    this.logger.log(`Получаем информацию о вакансиях`);
    const result = await this.jobRepo.getAllJobs();
    if(result){
      this.logger.log(`Данные получены`);
      return this.serviceRes.uniqueSuccessRes(result);
    }
    else{
      this.logger.log(`Информация не получена`);
      this.serviceRes.internalServerError();
    }
  }
}
