"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMovie = void 0;
const responses_1 = require("../../utils/responses");
class FindMovie {
    constructor(findMoviesRepository, findMovieByIdRepository) {
        this.findMoviesRepository = findMoviesRepository;
        this.findMovieByIdRepository = findMovieByIdRepository;
    }
    async find(id) {
        if (id) {
            const movie = await this.findMovieByIdRepository.findById(id);
            if (!movie) {
                return (0, responses_1.ErrorResponse)(`movie with id: ${id} not found`);
            }
            return (0, responses_1.SuccessResponse)(movie);
        }
        const movies = await this.findMoviesRepository.findAll();
        return (0, responses_1.SuccessResponse)(movies);
    }
}
exports.FindMovie = FindMovie;
