"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const AuthUseCases_1 = require("../../application/use-cases/AuthUseCases");
const UsersUseCases_1 = require("../../application/use-cases/UsersUseCases");
const IUsersRepository_1 = require("../../application/ports/IUsersRepository");
const UsersRepository_1 = require("../database/repositories/UsersRepository");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            AuthUseCases_1.AuthUseCase,
            UsersUseCases_1.UsersUseCases,
            { provide: IUsersRepository_1.IUsersRepository, useClass: UsersRepository_1.UsersRepository },
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map