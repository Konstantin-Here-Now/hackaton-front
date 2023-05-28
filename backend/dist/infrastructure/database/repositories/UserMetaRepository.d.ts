import { BaseRepository } from './BaseRepository';
import { UserMeta } from 'domain/models/UserMeta';
import { Connection } from 'typeorm';
import { IUsersMetaReposiotry } from 'application/ports/IUsersMetaRepository';
import { FormModel } from 'domain/models/FormModel';
import { PlaceWorkModel } from 'domain/models/PlaceWorkModel';
export declare class UserMetaRepository extends BaseRepository<UserMeta> implements IUsersMetaReposiotry {
    connection: Connection;
    constructor(connection: Connection);
    addUserForm(entity: FormModel): Promise<any>;
    addUserPlaces(user_id: number, entity: PlaceWorkModel): Promise<any>;
    checkUserIdExists(id: number): Promise<any>;
    getUserRole(id: number): Promise<any>;
    getUserFormById(id: number): Promise<any>;
}
