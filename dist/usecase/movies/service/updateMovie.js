"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovie = void 0;
const responses_1 = require("../../utils/responses");
class UpdateMovie {
    constructor(updateMovieDtoValidator, findMovieByIdRepository, updateMovieRepository) {
        this.updateMovieDtoValidator = updateMovieDtoValidator;
        this.findMovieByIdRepository = findMovieByIdRepository;
        this.updateMovieRepository = updateMovieRepository;
    }
    async update(id, updateMovieDto) {
        const errors = await this.updateMovieDtoValidator.updateValidate(updateMovieDto);
        if (errors) {
            return (0, responses_1.ErrorResponse)('invalid params');
        }
        const movie = await this.findMovieByIdRepository.findById(id);
        if (!movie) {
            return (0, responses_1.ErrorResponse)(`movie with id: ${id} not found`);
        }
        const movieUpdated = await this.updateMovieRepository.update(id, updateMovieDto);
        if (!movieUpdated) {
            return (0, responses_1.ErrorResponse)('error in film update');
        }
        return (0, responses_1.SuccessResponse)('successfully updated movie');
    }
}
exports.UpdateMovie = UpdateMovie;
