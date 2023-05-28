"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobModel = void 0;
class JobModel {
    constructor(job_name, salary, requiered_exp, emploitment, company, description, tasks, important, plus, conditions, key_skills, city, job_id) {
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
        this.job_id = job_id;
    }
    equals(entity) {
        if (!(entity instanceof JobModel))
            return false;
        return this.job_name === entity.job_name;
    }
}
exports.JobModel = JobModel;
//# sourceMappingURL=JobModel.js.map