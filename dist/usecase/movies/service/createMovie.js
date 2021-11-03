"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovie = void 0;
const responses_1 = require("../../utils/responses");
class CreateMovie {
    constructor(createMovieDtoValidator, createMovieRepository) {
        this.createMovieDtoValidator = createMovieDtoValidator;
        this.createMovieRepository = createMovieRepository;
    }
    async create(createMovieDto) {
        const errorsInParameters = await this.createMovieDtoValidator.createValidate(createMovieDto);
        if (errorsInParameters) {
            return (0, responses_1.ErrorResponse)('invalid params');
        }
        const createdMovie = await this.createMovieRepository.create(createMovieDto);
        if (!createdMovie) {
            return (0, responses_1.ErrorResponse)('error in film creation');
        }
        return (0, responses_1.SuccessResponse)('successfully created movie');
    }
}
exports.CreateMovie = CreateMovie;
