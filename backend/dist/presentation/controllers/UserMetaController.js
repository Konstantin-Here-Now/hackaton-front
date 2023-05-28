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
exports.UserMetaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const UserMetaUsecase_1 = require("../../application/use-cases/UserMetaUsecase");
const FormModel_1 = require("../../domain/models/FormModel");
let UserMetaController = class UserMetaController {
    constructor(userMetaUsecase) {
        this.userMetaUsecase = userMetaUsecase;
    }
    async addUserForm(token, data) {
        const result = await this.userMetaUsecase.addUserForm(token, data);
        return result;
    }
    async addUserPlace(token, data) {
        const result = await this.userMetaUsecase.addUserPlaceWork(token, data);
        return result;
    }
    async getUserForms(token) {
        console.log(token);
        const result = await this.userMetaUsecase.getUserForm(token);
        return result;
    }
    async getUserRole(token) {
        const result = await this.userMetaUsecase.getUserRole(token);
        return result;
    }
};
__decorate([
    (0, common_1.Post)("form/add/:token"),
    __param(0, (0, common_1.Param)("token")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FormModel_1.FormModel]),
    __metadata("design:returntype", Promise)
], UserMetaController.prototype, "addUserForm", null);
__decorate([
    (0, common_1.Post)("form/place/:token"),
    __param(0, (0, common_1.Param)("token")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], UserMetaController.prototype, "addUserPlace", null);
__decorate([
    (0, common_1.Get)("form/user/:token"),
    __param(0, (0, common_1.Param)("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserMetaController.prototype, "getUserForms", null);
__decorate([
    (0, common_1.Get)("role/:token"),
    __param(0, (0, common_1.Param)("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserMetaController.prototype, "getUserRole", null);
UserMetaController = __decorate([
    (0, swagger_1.ApiTags)("Meta"),
    (0, common_1.Controller)("meta"),
    __metadata("design:paramtypes", [UserMetaUsecase_1.UserMetaUsecase])
], UserMetaController);
exports.UserMetaController = UserMetaController;
//# sourceMappingURL=UserMetaController.js.map