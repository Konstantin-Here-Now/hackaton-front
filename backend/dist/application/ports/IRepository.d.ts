export declare abstract class IRepository<Entity> {
    abstract sign(entity: Entity): any;
    abstract checkUserExists(entity: Entity): any;
    abstract changePassword(entity: Entity): any;
}
