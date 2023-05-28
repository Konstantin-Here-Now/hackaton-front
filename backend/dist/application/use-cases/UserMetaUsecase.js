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
var UserMetaUsecase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMetaUsecase = void 0;
const common_1 = require("@nestjs/common");
const IUsersMetaRepository_1 = require("../ports/IUsersMetaRepository");
const UserExceptions_1 = require("../../domain/exceptions/UserExceptions");
const ServiceResponse_1 = require("../../infrastructure/utils/ServiceResponse");
const AuthUseCases_1 = require("./AuthUseCases");
let UserMetaUsecase = UserMetaUsecase_1 = class UserMetaUsecase {
    constructor(userMetaRepo, authUseCase) {
        this.userMetaRepo = userMetaRepo;
        this.authUseCase = authUseCase;
        this.logger = new common_1.Logger(UserMetaUsecase_1.name);
        this.userException = new UserExceptions_1.UserExceptions();
        this.serviceRes = new ServiceResponse_1.ServiceResponse();
    }
    async addUserForm(token, entity) {
        this.logger.log("Декодируем токен");
        const id = this.authUseCase.decryptJwt(token);
        this.logger.log(`Проверяем существование пользователя`);
        const check = await this.userMetaRepo.checkUserIdExists(id);
        if (check) {
            this.logger.log(`Добавляем данные формы`);
            entity.user_id = id;
            const result = await this.userMetaRepo.addUserForm(entity);
            return this.serviceRes.documentsAddSuccessfully();
        }
        else {
            this.logger.log("Пользователь не существует");
            return this.serviceRes.userNotFound();
        }
    }
    async addUserPlaceWork(token, entity) {
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
        }
        else {
            this.logger.log(`Пользователь не существует`);
            return this.serviceRes.userNotFound();
        }
    }
    async getUserForm(token) {
        this.logger.log(`Верифицируем пользователя`);
        const id = this.authUseCase.decryptJwt(token);
        this.logger.log(`Получаем роль пользователя`);
        const result = await this.userMetaRepo.getUserRole(id);
        if (result) {
            this.logger.log(`Проверяем роль`);
            if (result.name === 'user') {
                this.logger.log(`Собираем данные формы`);
                const data = await this.userMetaRepo.getUserFormById(id);
                if (data) {
                    this.logger.log("Информация получена");
                    return this.serviceRes.uniqueSuccessRes(data);
                }
                else {
                    this.logger.log(`Информация не найдена`);
                    return this.serviceRes.documnetsNotFound();
                }
            }
        }
        else {
            this.logger.log(`У пользователя нет прав доступа`);
            return this.serviceRes.userNotAuthorisated();
        }
    }
    async getUserRole(token) {
        this.logger.log(`Верифицируем пользователя`);
        const id = this.authUseCase.decryptJwt(token);
        this.logger.log(`Получаем роль пользователя`);
        const result = await this.userMetaRepo.getUserRole(id);
        if (result) {
            this.logger.log(`Роль получена`);
            return this.serviceRes.uniqueSuccessRes(result);
        }
        else {
            this.logger.log(`Пользователь не существует`);
            return this.serviceRes.userNotFound();
        }
    }
};
UserMetaUsecase = UserMetaUsecase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IUsersMetaRepository_1.IUsersMetaReposiotry,
        AuthUseCases_1.AuthUseCase])
], UserMetaUsecase);
exports.UserMetaUsecase = UserMetaUsecase;
//# sourceMappingURL=UserMetaUsecase.js.map