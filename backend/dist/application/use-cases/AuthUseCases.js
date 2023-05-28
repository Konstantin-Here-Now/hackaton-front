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
var AuthUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUseCase = void 0;
const common_1 = require("@nestjs/common");
const ServiceResponse_1 = require("../../infrastructure/utils/ServiceResponse");
const jwt_1 = require("@nestjs/jwt");
let AuthUseCase = AuthUseCase_1 = class AuthUseCase {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthUseCase_1.name);
        this.serviceRes = new ServiceResponse_1.ServiceResponse();
    }
    decryptJwt(token) {
        const decodedJwtAccessToken = this.jwtService.decode(token);
        console.log(decodedJwtAccessToken);
        const id = decodedJwtAccessToken["id"];
        return id;
    }
    async calculateTokens(user) {
        console.log(user);
        const access_token = await this.jwtService.signAsync(user, {
            expiresIn: '15m',
        });
        const refresh_token = await this.jwtService.signAsync(user, {
            expiresIn: '7d',
        });
        return { access_token, refresh_token };
    }
};
AuthUseCase = AuthUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthUseCase);
exports.AuthUseCase = AuthUseCase;
//# sourceMappingURL=AuthUseCases.js.map