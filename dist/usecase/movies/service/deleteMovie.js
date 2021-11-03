"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMovie = void 0;
const responses_1 = require("../../utils/responses");
class DeleteMovie {
    constructor(findMovieByIdRepository, deleteMovieRepository) {
        this.findMovieByIdRepository = findMovieByIdRepository;
        this.deleteMovieRepository = deleteMovieRepository;
    }
    async delete(id) {
        const movie = await this.findMovieByIdRepository.findById(id);
        if (!movie) {
            return (0, responses_1.ErrorResponse)(`movie with id: ${id} not found`);
        }
        const movieDeleted = await this.deleteMovieRepository.delete(id);
        if (!movieDeleted) {
            return (0, responses_1.ErrorResponse)('error in film delete');
        }
        return (0, responses_1.SuccessResponse)('successfully deleted movie');
    }
}
exports.DeleteMovie = DeleteMovie;
