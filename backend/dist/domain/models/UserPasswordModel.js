"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPasswordModel = void 0;
class UserPasswordModel {
    constructor(email, old_password, new_password) {
        this.email = email;
        this.old_password = old_password;
        this.new_password = new_password;
    }
    equals(entity) {
        if (!(entity instanceof UserPasswordModel))
            return false;
        return this.email == entity.email;
    }
}
exports.UserPasswordModel = UserPasswordModel;
//# sourceMappingURL=UserPasswordModel.js.map