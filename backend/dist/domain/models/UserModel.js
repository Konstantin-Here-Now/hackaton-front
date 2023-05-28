"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor(email, password, role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
    equals(entity) {
        if (!(entity instanceof UserModel))
            return false;
        return this.email == entity.email;
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=UserModel.js.map