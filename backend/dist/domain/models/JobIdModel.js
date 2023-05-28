"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobIdModel = void 0;
class JobIdModel {
    constructor(job_id) {
        this.job_id = job_id;
    }
    equals(entity) {
        if (!(entity instanceof JobIdModel))
            return false;
        return this.job_id === entity.job_id;
    }
}
exports.JobIdModel = JobIdModel;
//# sourceMappingURL=JobIdModel.js.map