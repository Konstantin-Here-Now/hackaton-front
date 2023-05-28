import { Injectable } from '@nestjs/common';
import { BaseRepository } from './BaseRepository';
import { UserMeta } from 'domain/models/UserMeta';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';
import { UserMetaEntity } from '../mapper/UserMetaEntity';
import { IUsersMetaReposiotry } from 'application/ports/IUsersMetaRepository';
import { runInThisContext } from 'vm';
import { FormModel } from 'domain/models/FormModel';
import { PlaceWorkModel } from 'domain/models/PlaceWorkModel';

@Injectable()
export class UserMetaRepository
  extends BaseRepository<UserMeta>
  implements IUsersMetaReposiotry
{
  connection: Connection;
  constructor(@InjectConnection() connection: Connection) {
    super(connection, UserMetaEntity);
    this.connection = connection;
  }

  async addUserForm(entity: FormModel){
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

  async addUserPlaces(user_id: number, entity:PlaceWorkModel){
    const result = await this.connection.query(`INSERT INTO user_places(time_start, time_end, specialisation, responsibilities, user_id) VALUES('${entity.time_start}', '${entity.time_end}', '${entity.specialisation}', '${entity.responsibilities}', ${user_id})`);
    return result;
  
  }

  async checkUserIdExists(id: number) {
    const result = await this.connection.query(`SELECT email FROM users WHERE id=${id}`);
    if(result.length === 0 ){
      return null;
    }
    else{
      return result;
    }
    
  }

  async getUserRole(id: number) {
    const result = await this.connection.query(`SELECT  r.name FROM users INNER JOIN roles r on r.id = users.role_id WHERE users.id = ${id};`);
    if(result.length === 0){
      return null; 
    }
    else{
      const data= result[0];
      return data;
    }
  }

  async getUserFormById(id: number) {
    const result = await this.connection.query(
      `
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
    if(result.length == 0){
      return null;
    }
    else{
      const data= result[0];
      return data;
    }
  }
  
}
