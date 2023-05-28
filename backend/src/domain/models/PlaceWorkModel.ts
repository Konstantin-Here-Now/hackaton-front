import { IEntity } from "domain/shared/IEntity";

export class PlaceWorkModel implements IEntity {
  time_start: string;
  time_end: string;
  specialisation: string;
  responsibilities: string;


  constructor(
    time_start,
    time_end,
    specialisation: string,
    responsibilities: string,
    
  ){
    this.time_start = time_start;
    this.time_end = time_end;
    this.specialisation = specialisation,
    this.responsibilities = responsibilities;
    
    
  }
  equals(entity: IEntity): boolean {
    if (!(entity instanceof PlaceWorkModel)) return false;
    return this.specialisation === entity.specialisation;
  }
 
}
