export declare abstract class IMetaRepository<Entity> {
    abstract addUserForm(entity: Entity): any;
    abstract addUserPlaces(user_id: number, entity: Entity): any;
    abstract checkUserIdExists(id: number): any;
    abstract getUserRole(id: number): any;
    abstract getUserFormById(id: number): any;
}
