"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormModel = void 0;
class FormModel {
    constructor(spec, contacts, user_id) {
        this.spec = spec;
        this.contacts = contacts;
        this.user_id = user_id;
    }
    equals(entity) {
        if (!(entity instanceof FormModel))
            return false;
        return this.user_id === entity.user_id;
    }
}
exports.FormModel = FormModel;
//# sourceMappingURL=FormModel.js.map