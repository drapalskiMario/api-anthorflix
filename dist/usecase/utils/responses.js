"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = exports.SuccessResponse = void 0;
function SuccessResponse(message) {
    return { success: message };
}
exports.SuccessResponse = SuccessResponse;
function ErrorResponse(message) {
    return { error: message };
}
exports.ErrorResponse = ErrorResponse;
