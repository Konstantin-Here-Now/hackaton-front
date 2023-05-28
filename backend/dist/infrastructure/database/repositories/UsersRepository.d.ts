import { Connection } from 'typeorm';
import { IUsersRepository } from 'application/ports/IUsersRepository';
import { User } from 'domain/models/User';
import { BaseRepository } from './BaseRepository';
import { UserModel } from 'domain/models/UserModel';
import { UserPasswordModel } from 'domain/models/UserPasswordModel';
export declare class UsersRepository extends BaseRepository<User> implements IUsersRepository {
    connection: Connection;
    constructor(connection: Connection);
    sign(entity: UserModel): Promise<any>;
    checkUserExists(entity: UserModel): Promise<any>;
    changePassword(entity: UserPasswordModel): Promise<any>;
}
