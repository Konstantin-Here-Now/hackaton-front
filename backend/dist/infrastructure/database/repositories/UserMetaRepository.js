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
exports.UserMetaRepository = void 0;
const common_1 = require("@nestjs/common");
const BaseRepository_1 = require("./BaseRepository");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const UserMetaEntity_1 = require("../mapper/UserMetaEntity");
let UserMetaRepository = class UserMetaRepository extends BaseRepository_1.BaseRepository {
    constructor(connection) {
        super(connection, UserMetaEntity_1.UserMetaEntity);
        this.connection = connection;
    }
    async addUserForm(entity) {
        const result = await this.connection.query(`
    WITH step_one AS (
      INSERT INTO user_specialisation(specialisation,salary, user_id)
      values('${entity.spec.specialisation}', ${entity.spec.salary}, ${entity.user_id})
   )
   
     INSERT  INTO user_contacts (first_name, last_name, city_id, user_id)
       VALUES
   ('${entity.contacts.first_name}', '${entity.contacts.last_name}',(SELECT id FROM cities WHERE name = '${entity.contacts.city}'), ${entity.user_id})
    
    
    `);
        return result;
    }
    async addUserPlaces(user_id, entity) {
        const result = await this.connection.query(`INSERT INTO user_places(time_start, time_end, specialisation, responsibilities, user_id) VALUES('${entity.time_start}', '${entity.time_end}', '${entity.specialisation}', '${entity.responsibilities}', ${user_id})`);
        return result;
    }
    async checkUserIdExists(id) {
        const result = await this.connection.query(`SELECT email FROM users WHERE id=${id}`);
        if (result.length === 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getUserRole(id) {
        const result = await this.connection.query(`SELECT  r.name FROM users INNER JOIN roles r on r.id = users.role_id WHERE users.id = ${id};`);
        if (result.length === 0) {
            return null;
        }
        else {
            const data = result[0];
            return data;
        }
    }
    async getUserFormById(id) {
        const result = await this.connection.query(`
      SELECT us.specialisation as user_specialisation,
       us.salary as user_salary,
       up.time_start as place_time_start,
       up.time_end as place_time_end,
       up.specialisation as place_specialisation,
       up.responsibilities as place_responsibilities,
       uc.first_name as contact_first_name,
       uc.last_name as contact_last_name,
       c.name as city_name
      FROM users
      INNER JOIN user_contacts uc on users.id = uc.user_id
      INNER JOIN user_places up on users.id = up.user_id
      INNER JOIN user_specialisation us on users.id = us.user_id
      INNER JOIN cities c on c.id = uc.city_id
      WHERE users.id = ${id};
    `);
        if (result.length == 0) {
            return null;
        }
        else {
            const data = result[0];
            return data;
        }
    }
};
UserMetaRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], UserMetaRepository);
exports.UserMetaRepository = UserMetaRepository;
//# sourceMappingURL=UserMetaRepository.js.map