import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Entity } from 'typeorm';

import { IUsersRepository } from 'application/ports/IUsersRepository';
import { User } from 'domain/models/User';
import { UserEntity } from 'infrastructure/database/mapper/UserEntity';

import { BaseRepository } from './BaseRepository';
import { UserModel } from 'domain/models/UserModel';
import { UserPasswordModel } from 'domain/models/UserPasswordModel';

@Injectable()
export class UsersRepository
  extends BaseRepository<User>
  implements IUsersRepository
{
  connection: Connection;
  constructor(
    @InjectConnection() connection: Connection,
  ) {
    super(connection, UserEntity);
    this.connection = connection;
  }

  async sign(entity: UserModel) {
    const result = await this.connection.query(`INSERT  INTO  users(email, password, role_id) VALUES ('${entity.email}','${entity.password}',(SELECT id FROM roles WHERE name= '${entity.role}')) RETURNING id;`);
    return result;
  }
  
  async checkUserExists(entity: UserModel) {
    const result = await this.connection.query(`SELECT id,password FROM users WHERE email = '${entity.email}';`);
    if(result.length === 0){
      return null;
    }
    else{
      const data = result[0];
      return data;
    }
    
  }
  async changePassword(entity: UserPasswordModel) {
    const result = await this.connection.query(`UPDATE users SET password= '${entity.new_password}' WHERE email = '${entity.email}';`);
    return result;
  }

  


}
