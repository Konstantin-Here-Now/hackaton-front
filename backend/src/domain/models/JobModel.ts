import { IEntity } from "domain/shared/IEntity";

export class JobModel implements IEntity {
  job_name: string;
  salary: number;
  requiered_exp: string;
  emploitment: string;
  company: string;
  description: string;
  tasks: string;
  important: string;
  plus: string;
  conditions: string;
  key_skills: string;
  city: string;
  job_id?: number

  constructor(
    job_name: string,
    salary: number,
    requiered_exp: string,
    emploitment: string,
    company: string,
    description: string,
    tasks: string,
    important: string,
    plus: string,
    conditions: string,
    key_skills: string,
    city: string,
    job_id?:number
  ) {
    this.job_name = job_name;
    this.salary = salary;
    this.requiered_exp = requiered_exp;
    this.emploitment = emploitment;
    this.company = company;
    this.description = description;
    this.tasks = tasks;
    this.important = important;
    this.plus = plus;
    this.conditions = conditions;
    this.key_skills = key_skills;
    this.city = city;
    this.job_id = job_id
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof JobModel)) return false;
    return this.job_name === entity.job_name;
  }
}
