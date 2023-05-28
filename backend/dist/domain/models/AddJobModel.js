"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddJobModel = void 0;
class AddJobModel {
    constructor(profession, company, city, salary, user_id) {
        this.profession = profession;
        this.company = company;
        this.city = city;
        this.salary = salary;
        this.user_id = user_id;
    }
    equals(entity) {
        if (!(entity instanceof AddJobModel))
            return false;
        return this.user_id === entity.user_id;
    }
}
exports.AddJobModel = AddJobModel;
//# sourceMappingURL=AddJobModel.js.map