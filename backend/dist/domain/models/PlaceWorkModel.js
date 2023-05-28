"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceWorkModel = void 0;
class PlaceWorkModel {
    constructor(time_start, time_end, specialisation, responsibilities) {
        this.time_start = time_start;
        this.time_end = time_end;
        this.specialisation = specialisation,
            this.responsibilities = responsibilities;
    }
    equals(entity) {
        if (!(entity instanceof PlaceWorkModel))
            return false;
        return this.specialisation === entity.specialisation;
    }
}
exports.PlaceWorkModel = PlaceWorkModel;
//# sourceMappingURL=PlaceWorkModel.js.map