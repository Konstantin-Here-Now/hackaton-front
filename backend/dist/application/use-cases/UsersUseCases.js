"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var UsersUseCases_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUseCases = void 0;
const common_1 = require("@nestjs/common");
const IUsersRepository_1 = require("../ports/IUsersRepository");
const ServiceResponse_1 = require("../../infrastructure/utils/ServiceResponse");
const bcrypt = __importStar(require("bcrypt"));
const secretsConstant_1 = require("../../infrastructure/utils/secretsConstant");
const ioredis_1 = __importDefault(require("ioredis"));
const nestjs_redis_1 = require("@liaoliaots/nestjs-redis");
const AuthUseCases_1 = require("./AuthUseCases");
let UsersUseCases = UsersUseCases_1 = class UsersUseCases {
    constructor(usersRepository, authService, redis) {
        this.usersRepository = usersRepository;
        this.authService = authService;
        this.redis = redis;
        this.logger = new common_1.Logger(UsersUseCases_1.name);
        this.serviceRes = new ServiceResponse_1.ServiceResponse();
    }
    async sign(user) {
        this.logger.log(`Проверяем наличие пользователя в базе`);
        const check = await this.usersRepository.checkUserExists(user);
        if (check) {
            this.logger.log(`Пользователь уже существует`);
            return this.serviceRes.userAlreadyExist();
        }
        else {
            this.logger.log(`Хэшируем пароль`);
            user.password = await bcrypt.hash(user.password, secretsConstant_1.salt);
            this.logger.log(`Добавляем пользователя в бд`);
            const result = await this.usersRepository.sign(user);
            this.logger.log(`Генерируем токен`);
            const tokens = await this.authService.calculateTokens(result[0]);
            return this.serviceRes.uniqueSuccessRes(tokens);
        }
    }
    async login(user) {
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
            }
            else {
                this.logger.log(`Пароли не сопадают`);
                return this.serviceRes.passwordMismatch();
            }
        }
        else {
            this.logger.log(`Пользователь не существует`);
            return this.serviceRes.userNotFound();
        }
    }
    async updatePassword(user) {
        this.logger.log(`Проверяем наличие пользователя в бд`);
        const check = await this.usersRepository.checkUserExists(user);
        if (check) {
            this.logger.log(`Сравниваем пароли пользователей`);
            const isMatch = await bcrypt.compare(user.old_password, check.password);
            if (isMatch) {
                this.logger.log(`Обновляем пароль`);
                const result = await this.usersRepository.changePassword(user);
                return this.serviceRes.passwordSuccessUpdate();
            }
            else {
                this.logger.log(`Пароли не сопвадают`);
                return this.serviceRes.passwordMismatch();
            }
        }
        else {
            this.logger.log(`Пользователь не существует`);
            return this.serviceRes.userNotFound();
        }
    }
};
UsersUseCases = UsersUseCases_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, nestjs_redis_1.InjectRedis)()),
    __metadata("design:paramtypes", [IUsersRepository_1.IUsersRepository,
        AuthUseCases_1.AuthUseCase,
        ioredis_1.default])
], UsersUseCases);
exports.UsersUseCases = UsersUseCases;
//# sourceMappingURL=UsersUseCases.js.map