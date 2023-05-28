import { IEntity } from "domain/shared/IEntity";
export declare class FormModel implements IEntity {
    spec: {
        specialisation: string;
        salary: number;
    };
    contacts: {
        first_name: string;
        last_name: string;
        city: string;
    };
    user_id?: number;
    constructor(spec: any, contacts: any, user_id?: any);
    equals(entity: IEntity): boolean;
}
