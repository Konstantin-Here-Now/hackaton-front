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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const terminus_1 = require("@nestjs/terminus");
let HealthController = class HealthController {
    constructor(health, dns, db, configService) {
        this.health = health;
        this.dns = dns;
        this.db = db;
        this.configService = configService;
    }
    healthCheck() {
        const host = this.configService.get('HOST');
        const port = this.configService.get('PORT');
        const urlApi = `http://${host}:${port}`;
        return this.health.check([
            async () => this.db.pingCheck('database', { timeout: 300 }),
            () => this.dns.pingCheck('api', urlApi),
        ]);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, terminus_1.HealthCheck)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "healthCheck", null);
HealthController = __decorate([
    (0, swagger_1.ApiTags)('Health Check'),
    (0, common_1.Controller)('health'),
    __metadata("design:paramtypes", [terminus_1.HealthCheckService,
        terminus_1.HttpHealthIndicator,
        terminus_1.TypeOrmHealthIndicator,
        config_1.ConfigService])
], HealthController);
exports.HealthController = HealthController;
//# sourceMappingURL=index.js.map