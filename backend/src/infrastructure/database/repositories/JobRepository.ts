import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./BaseRepository";
import { JobModel } from "domain/models/JobModel";
import { IJobRepository } from "application/ports/IJobRepository";
import { Connection } from "typeorm";
import { JobEntity } from "../mapper/JobEntity";
import { InjectConnection } from "@nestjs/typeorm";

@Injectable()
export class JobRepository
  extends BaseRepository<JobModel>
  implements IJobRepository
{
  connection: Connection;
  constructor(@InjectConnection() connection: Connection) {
    super(connection, JobEntity);
    this.connection = connection;
  }

  async getUserRole(id: number) {
    const result = await this.connection.query(
      `SELECT  r.name FROM users INNER JOIN roles r on r.id = users.role_id WHERE users.id = ${id};`
    );
    if (result.length === 0) {
      return null;
    } else {
      const data = result[0];
      return data;
    }
  }

  async addJob(user_id: number, entity: JobModel) {
    const result = await this.connection.query(
      `INSERT INTO job(company_id, profession_id, city_id, salary, user_id) VALUES((SELECT id FROM company WHERE name ='${entity.company}'), (SELECT id FROM profession WHERE name='${entity.job_name}'), (SELECT id FROM cities WHERE name='${entity.city}'), '${entity.salary}', ${user_id}) RETURNING  id;`
    );
    if (result.length == 0) {
      return null;
    } else {
      const data = result[0];
      return data;
    }
  }
  async getJob(id: number) {
    const result = await this.connection.query(
      `
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
            `
    );
    if (result.length == 0) {
      return null;
    } else {
      return result;
    }
  }

  async addJobRes(job_id: number, user_id: number) {
    const result = await this.connection.query(`
        INSERT INTO responses(job_id, status_id, user_id) VALUES(${job_id},3,${user_id});
        `);
    return result;
  }

  async getJobRes(user_id: number) {
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
    } else {
      return result;
    }
  }

  async getJobById(job_id: number) {
    const result = await this.connection.query(
      `SELECT
                job.id,
                c.name as company_name,
                p.name as profession_name,
                ct.name as city_name,
                salary
             FROM job
             INNER JOIN cities ct on ct.id = job.city_id
             INNER JOIN company c on c.id = job.company_id
             INNER JOIN profession p on p.id = job.profession_id
             WHERE job.id = ${job_id}`
    );
    if (result.length == 0) {
      return null;
    } else {
      const data = result[0];
      return data;
    }
  }

  async checkJobIdUserIdExists(job_id: number, user_id: number) {
    const result = await this.connection.query(
      `SELECT s.name
            FROM responses
            INNER JOIN status s on s.id = responses.status_id
            WHERE job_id =${job_id} AND user_id = ${user_id};`
    );
    if (result.length == 0) {
      return null;
    } else {
      const data = result[0];
      return data;
    }
  }

  async updateJobStatus(job_id: number, user_id: number, status: string) {
    const result = await this.connection.query(
      `UPDATE responses SET status_id = (SELECT id FROM status WHERE name ='${status}') WHERE user_id =${user_id} AND job_id = ${job_id};`
    );
    return result;
  }

  async getAllJobs() {
    const result = await this.connection.query(
      `
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
        `
    );
    if (result.length == 0) {
      return null;
    } else {
      return result;
    }
  }
}
