import { Inject, Injectable, Logger } from "@nestjs/common";
import { IUsersMetaReposiotry } from "application/ports/IUsersMetaRepository";
import { UserExceptions } from "domain/exceptions/UserExceptions";
import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
import { AuthUseCase } from "./AuthUseCases";
import { FormModel } from "domain/models/FormModel";
import { PlaceWorkModel } from "domain/models/PlaceWorkModel";

@Injectable()
export class UserMetaUsecase {
  private readonly logger = new Logger(UserMetaUsecase.name);
  public userException = new UserExceptions();
  public serviceRes = new ServiceResponse();
  constructor(
    private readonly userMetaRepo: IUsersMetaReposiotry,
    private readonly authUseCase: AuthUseCase
  ) {}

  async addUserForm(token: string, entity: FormModel) {
    this.logger.log("Декодируем токен");
    const id = this.authUseCase.decryptJwt(token);
    this.logger.log(`Проверяем существование пользователя`);
    const check = await this.userMetaRepo.checkUserIdExists(id);
    if (check) {
      this.logger.log(`Добавляем данные формы`);
      entity.user_id = id;
      const result = await this.userMetaRepo.addUserForm(entity);
      return this.serviceRes.documentsAddSuccessfully();
    } else {
      this.logger.log("Пользователь не существует");
      return this.serviceRes.userNotFound();
    }
  }

  async addUserPlaceWork(token: string, entity: Array<PlaceWorkModel>) {
    this.logger.log(`Верифицируем пользователя`);
    
    const id = this.authUseCase.decryptJwt(token);
    this.logger.log(`Проверяем существет пользователя`);
    const check = await this.userMetaRepo.checkUserIdExists(id);
    if (check) {
      this.logger.log(`Добавляем данные пользователя в бд`);
      entity.forEach((cat, index) => {
        this.logger.log(`Добавляем данные пользователя`);
        this.userMetaRepo.addUserPlaces(id, entity[index]);
      });

      this.logger.log(`Данные успешно добавлены`);
      return this.serviceRes.metaSuccessfulyAdded();
    } else {
      this.logger.log(`Пользователь не существует`);
      return this.serviceRes.userNotFound();
    }
  }


  async getUserForm(token: string){
    this.logger.log(`Верифицируем пользователя`);
    const id = this.authUseCase.decryptJwt(token);
    this.logger.log(`Получаем роль пользователя`);
    const result = await this.userMetaRepo.getUserRole(id);
    if(result){
      this.logger.log(`Проверяем роль`);
      if(result.name === 'user'){
        this.logger.log(`Собираем данные формы`);
        const data = await this.userMetaRepo.getUserFormById(id);
        if(data){
          this.logger.log("Информация получена");
          return this.serviceRes.uniqueSuccessRes(data);
        }
        else{
          this.logger.log(`Информация не найдена`);
          return this.serviceRes.documnetsNotFound();
        }
      }
    }
    else{
      this.logger.log(`У пользователя нет прав доступа`);
      return this.serviceRes.userNotAuthorisated();
    }
  }

  async getUserRole(token: string){
    this.logger.log(`Верифицируем пользователя`);
    const id = this.authUseCase.decryptJwt(token);
    this.logger.log(`Получаем роль пользователя`);
    const result = await this.userMetaRepo.getUserRole(id);
    if(result){
      this.logger.log(`Роль получена`);
      return this.serviceRes.uniqueSuccessRes(result);
    }
    else{
      this.logger.log(`Пользователь не существует`);
      return this.serviceRes.userNotFound();
    }
    
    
  }

  


}
