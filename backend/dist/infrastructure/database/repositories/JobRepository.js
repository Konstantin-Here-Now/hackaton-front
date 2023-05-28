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
exports.JobRepository = void 0;
const common_1 = require("@nestjs/common");
const BaseRepository_1 = require("./BaseRepository");
const typeorm_1 = require("typeorm");
const JobEntity_1 = require("../mapper/JobEntity");
const typeorm_2 = require("@nestjs/typeorm");
let JobRepository = class JobRepository extends BaseRepository_1.BaseRepository {
    constructor(connection) {
        super(connection, JobEntity_1.JobEntity);
        this.connection = connection;
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
    async addJob(user_id, entity) {
        const result = await this.connection.query(`INSERT INTO job(company_id, profession_id, city_id, salary, user_id) VALUES((SELECT id FROM company WHERE name ='${entity.company}'), (SELECT id FROM profession WHERE name='${entity.job_name}'), (SELECT id FROM cities WHERE name='${entity.city}'), '${entity.salary}', ${user_id}) RETURNING  id;`);
        if (result.length == 0) {
            return null;
        }
        else {
            const data = result[0];
            return data;
        }
    }
    async getJob(id) {
        const result = await this.connection.query(`
            SELECT
                job.id,
                c.name as company_name,
                p.name as profession_name,
                ct.name as city_name,
                salary
            FROM job
            INNER JOIN cities ct on ct.id = job.city_id
            INNER JOIN company c on c.id = job.company_id
            INNER JOIN profession p on p.id = job.profession_id
            WHERE user_id = ${id}
            `);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async addJobRes(job_id, user_id) {
        const result = await this.connection.query(`
        INSERT INTO responses(job_id, status_id, user_id) VALUES(${job_id},3,${user_id});
        `);
        return result;
    }
    async getJobRes(user_id) {
        const result = await this.connection.query(`
                SELECT c.name as company_name,
                    p.name as profession_name,
                    s.name as status
                FROM responses
                INNER JOIN job j on j.id = responses.job_id
                INNER join profession p on p.id = j.profession_id
                INNER JOIN company c on j.company_id = c.id
                INNER JOIN status s on responses.status_id = s.id
                WHERE responses.user_id  = ${user_id};
            `);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getJobById(job_id) {
        const result = await this.connection.query(`SELECT
                job.id,
                c.name as company_name,
                p.name as profession_name,
                ct.name as city_name,
                salary
             FROM job
             INNER JOIN cities ct on ct.id = job.city_id
             INNER JOIN company c on c.id = job.company_id
             INNER JOIN profession p on p.id = job.profession_id
             WHERE job.id = ${job_id}`);
        if (result.length == 0) {
            return null;
        }
        else {
            const data = result[0];
            return data;
        }
    }
    async checkJobIdUserIdExists(job_id, user_id) {
        const result = await this.connection.query(`SELECT s.name
            FROM responses
            INNER JOIN status s on s.id = responses.status_id
            WHERE job_id =${job_id} AND user_id = ${user_id};`);
        if (result.length == 0) {
            return null;
        }
        else {
            const data = result[0];
            return data;
        }
    }
    async updateJobStatus(job_id, user_id, status) {
        const result = await this.connection.query(`UPDATE responses SET status_id = (SELECT id FROM status WHERE name ='${status}') WHERE user_id =${user_id} AND job_id = ${job_id};`);
        return result;
    }
    async getAllJobs() {
        const result = await this.connection.query(`
            SELECT
                job.id,
                c.name as company_name,
                p.name as profession_name,
                ct.name as city_name,
                salary
             FROM job
             INNER JOIN cities ct on ct.id = job.city_id
             INNER JOIN company c on c.id = job.company_id
             INNER JOIN profession p on p.id = job.profession_id;
        `);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
};
JobRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], JobRepository);
exports.JobRepository = JobRepository;
//# sourceMappingURL=JobRepository.js.map