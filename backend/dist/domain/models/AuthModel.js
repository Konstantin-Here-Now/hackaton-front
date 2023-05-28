"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModel = void 0;
class AuthModel {
    constructor(token) {
        this.token = token;
    }
    equals(entity) {
        if (!(entity instanceof AuthModel))
            return false;
        return this.token === entity.token;
    }
}
exports.AuthModel = AuthModel;
//# sourceMappingURL=AuthModel.js.map