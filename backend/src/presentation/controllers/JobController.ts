import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JobUsecase } from "application/use-cases/JobUseCase";
import bodyParser from "body-parser";
import { JobIdModel } from "domain/models/JobIdModel";
import { JobModel } from "domain/models/JobModel";
import { JobStatusModel } from "domain/models/JobStatusModel";
import { JwtTokenModel } from "domain/models/JwtToken";


@ApiTags("Job")
@Controller("job")
export class JobController {
  constructor(private readonly jobUsecase: JobUsecase) {}


  @Post("add/:token")
  async addJob(
    @Param("token") token,
    @Body() data: JobModel
  ) {
    const result = await this.jobUsecase.addJob(token, data);
    return result;
  }

  @Get("detail/:id")
  async getDetail(
    @Param("id") id
  ){
    const result = await this.jobUsecase.getJobById(id);
    return result;
  }

  @Get("get/:token")
  async getJob(
    @Param("token") token
  ){
    const result = await this.jobUsecase.getJob(token);
    return result;
  }

  @Post("add/res/:token")
  async addJobRes(
    @Param("token") token,
    @Body() data: JobIdModel
  ) {
    const result = await this.jobUsecase.addJobRes(token, data);
    return result;
  }

  @Put("update/res/:token")
  async updateJobStatus(
    @Param("token") token,
    @Body() data: JobStatusModel
  ) {
    const result = await this.jobUsecase.updateJobStatus(token, data);
    return result;
  }

  @Get("get")
  async getAllJob(){
    const result = await this.jobUsecase.getAllJob();
    return result;
  }

  @Get("/res/:token")
  async getJobRes(
    @Param("token") token
  ){
    const result = await this.jobUsecase.getJobRes(token);
    return result;
  }
  

}