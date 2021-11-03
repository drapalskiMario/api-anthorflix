"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdValidator = void 0;
const mongoose_1 = require("mongoose");
class IdValidator {
    isValid(id) {
        return mongoose_1.Types.ObjectId.isValid(id);
    }
}
exports.IdValidator = IdValidator;
