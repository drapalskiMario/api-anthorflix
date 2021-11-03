"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoValidators = void 0;
const joi_1 = __importDefault(require("joi"));
class DtoValidators {
    createValidate(createMovieDto) {
        const JoiValidator = joi_1.default.object({
            name: joi_1.default.string().required(),
            description: joi_1.default.string().required(),
            url: joi_1.default.string().uri().required()
        });
        const { error } = JoiValidator.validate(createMovieDto);
        if (error) {
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }
    updateValidate(updateMovieDto) {
        const JoiValidator = joi_1.default.object({
            name: joi_1.default.string().required(),
            description: joi_1.default.string().required(),
            url: joi_1.default.string().uri().required()
        });
        const { error } = JoiValidator.validate(updateMovieDto);
        if (error) {
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }
}
exports.DtoValidators = DtoValidators;
