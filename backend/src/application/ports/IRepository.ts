import { Injectable } from '@nestjs/common';
import { Login } from 'domain/models/Login';
import { List } from 'lodash';

@Injectable()
export abstract class IRepository<Entity> {
  abstract sign(entity :Entity);
  abstract checkUserExists(entity: Entity);
  abstract changePassword(entity: Entity);
  
}
