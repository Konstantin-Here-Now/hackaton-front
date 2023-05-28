import { Injectable, Logger } from "@nestjs/common";

import { IUsersRepository } from "application/ports/IUsersRepository";
import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
import * as bcrypt from "bcrypt";
import { salt } from "infrastructure/utils/secretsConstant";
import Redis from "ioredis";
import { InjectRedis, RedisModule } from "@liaoliaots/nestjs-redis";
import { AuthUseCase } from "./AuthUseCases";
import { UserModel } from "domain/models/UserModel";
import { UserPasswordModel } from "domain/models/UserPasswordModel";

@Injectable()
export class UsersUseCases {
  private readonly logger = new Logger(UsersUseCases.name);
  public serviceRes = new ServiceResponse();
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly authService: AuthUseCase,

    @InjectRedis() private readonly redis: Redis
  ) {}
  async sign(user: UserModel) {
    this.logger.log(`Проверяем наличие пользователя в базе`);
    const check = await this.usersRepository.checkUserExists(user);
    if (check) {
      this.logger.log(`Пользователь уже существует`);
      return this.serviceRes.userAlreadyExist();
    } else {
      this.logger.log(`Хэшируем пароль`);
      user.password = await bcrypt.hash(user.password, salt);
      this.logger.log(`Добавляем пользователя в бд`);
      const result = await this.usersRepository.sign(user);
      this.logger.log(`Генерируем токен`);
      const tokens = await this.authService.calculateTokens(result[0]);
      return this.serviceRes.uniqueSuccessRes(tokens);
    }
  }

  async login(user: UserModel) {
    this.logger.log(`Проверяем наличие пользователя в бд`);
    const check = await this.usersRepository.checkUserExists(user);
    if (check) {
      this.logger.log(`Проверяем совпадают ли пароли`);
      const isMatch = await bcrypt.compare(user.password, check.password);
      if (isMatch) {
        this.logger.log(`Пользователь вошёл в систему`);
       
        const tokens = await this.authService.calculateTokens(check);
        this.logger.log(`Токены сгенерированы`);
        return this.serviceRes.uniqueSuccessRes(tokens);
      } else {
        this.logger.log(`Пароли не сопадают`);
        return this.serviceRes.passwordMismatch();
      }
    } else {
      this.logger.log(`Пользователь не существует`);
      return this.serviceRes.userNotFound();
    }
  }

  async updatePassword(user: UserPasswordModel){
    this.logger.log(`Проверяем наличие пользователя в бд`);
    const check = await this.usersRepository.checkUserExists(user);
    if(check){
      this.logger.log(`Сравниваем пароли пользователей`);
      const isMatch = await bcrypt.compare(user.old_password, check.password);
      if(isMatch){
        this.logger.log(`Обновляем пароль`);
        const result = await this.usersRepository.changePassword(user);
        return this.serviceRes.passwordSuccessUpdate();
      }
      else{
        this.logger.log(`Пароли не сопвадают`);
        return this.serviceRes.passwordMismatch();
      } 
    }
    else{
      this.logger.log(`Пользователь не существует`);
      return this.serviceRes.userNotFound();
    }
  }

 

  

}
