import { IEntity } from "domain/shared/IEntity";
export declare class PlaceWorkModel implements IEntity {
    time_start: string;
    time_end: string;
    specialisation: string;
    responsibilities: string;
    constructor(time_start: any, time_end: any, specialisation: string, responsibilities: string);
    equals(entity: IEntity): boolean;
}
