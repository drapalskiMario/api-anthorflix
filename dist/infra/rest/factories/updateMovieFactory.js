"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUpdateMovieController = void 0;
const updateMovie_1 = require("../../../usecase/movies/service/updateMovie");
const mongoDbRepository_1 = require("../../database/repositories/mongoDbRepository");
const movieSchema_1 = __importDefault(require("../../database/schemas/movieSchema"));
const dtosValidator_1 = require("../../validators/dtosValidator");
const idValidator_1 = require("../../validators/idValidator");
const updateMovieController_1 = require("../controllers/updateMovieController");
const makeUpdateMovieController = async (req, res) => {
    const updateMovieDtoValidator = new dtosValidator_1.DtoValidators();
    const idValidator = new idValidator_1.IdValidator();
    const findMovieAndUpdateRepository = new mongoDbRepository_1.MongoDbRepository(movieSchema_1.default, idValidator);
    const updateMovieService = new updateMovie_1.UpdateMovie(updateMovieDtoValidator, findMovieAndUpdateRepository, findMovieAndUpdateRepository);
    const updateMovieController = new updateMovieController_1.UpdateMovieController(updateMovieService);
    return updateMovieController.handle(req, res);
};
exports.makeUpdateMovieController = makeUpdateMovieController;
