"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobEntity = void 0;
const JobModel_1 = require("../../../domain/models/JobModel");
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("./BaseEntity");
exports.JobEntity = new typeorm_1.EntitySchema({
    name: "Job",
    tableName: "job",
    target: JobModel_1.JobModel,
    columns: Object.assign(Object.assign({}, BaseEntity_1.BaseEntity), { job_name: {
            type: String,
            length: 100
        } })
});
//# sourceMappingURL=JobEntity.js.map