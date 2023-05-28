import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IMetaRepository<Entity> {
    abstract addUserForm(entity: Entity);
    abstract addUserPlaces(user_id: number, entity:Entity);
    abstract checkUserIdExists(id: number);
    abstract getUserRole(id: number);
    abstract getUserFormById(id: number);

   
 
}
