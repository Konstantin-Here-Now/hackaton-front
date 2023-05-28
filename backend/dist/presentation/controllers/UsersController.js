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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const UsersUseCases_1 = require("../../application/use-cases/UsersUseCases");
const UserModel_1 = require("../../domain/models/UserModel");
const UserPasswordModel_1 = require("../../domain/models/UserPasswordModel");
const requestIp = require('request-ip');
let UsersController = class UsersController {
    constructor(usersUseCases) {
        this.usersUseCases = usersUseCases;
    }
    async sign(data) {
        const result = await this.usersUseCases.sign(data);
        return result;
    }
    async login(data) {
        const result = await this.usersUseCases.login(data);
        return result;
    }
    async changePassword(data) {
        const result = await this.usersUseCases.updatePassword(data);
        return result;
    }
};
__decorate([
    (0, common_1.Post)("sign"),
    (0, swagger_1.ApiOperation)({
        summary: "Sign User"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserModel_1.UserModel]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "sign", null);
__decorate([
    (0, common_1.Post)("login"),
    (0, swagger_1.ApiOperation)({
        summary: "Login User"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserModel_1.UserModel]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("change"),
    (0, swagger_1.ApiOperation)({
        summary: "Change password"
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserPasswordModel_1.UserPasswordModel]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changePassword", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [UsersUseCases_1.UsersUseCases])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=UsersController.js.map