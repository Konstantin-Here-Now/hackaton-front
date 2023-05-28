"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobStatusModel = void 0;
class JobStatusModel {
    constructor(job_id, status) {
        this.job_id = job_id;
        this.status = status;
    }
    equals(entity) {
        if (!(entity instanceof JobStatusModel))
            return false;
        return this.job_id === entity.job_id;
    }
}
exports.JobStatusModel = JobStatusModel;
//# sourceMappingURL=JobStatusModel.js.map