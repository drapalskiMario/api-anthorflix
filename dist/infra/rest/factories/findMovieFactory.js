"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFindMoviController = void 0;
const findMovie_1 = require("../../../usecase/movies/service/findMovie");
const mongoDbRepository_1 = require("../../database/repositories/mongoDbRepository");
const movieSchema_1 = __importDefault(require("../../database/schemas/movieSchema"));
const idValidator_1 = require("../../validators/idValidator");
const findMovieController_1 = require("../controllers/findMovieController");
const makeFindMoviController = async (req, res) => {
    const idValidator = new idValidator_1.IdValidator();
    const findMoviesRepository = new mongoDbRepository_1.MongoDbRepository(movieSchema_1.default, idValidator);
    const findMovieByIdRepository = new mongoDbRepository_1.MongoDbRepository(movieSchema_1.default, idValidator);
    const findMovieService = new findMovie_1.FindMovie(findMoviesRepository, findMovieByIdRepository);
    const findMovieController = new findMovieController_1.FindMovieController(findMovieService);
    return findMovieController.handle(req, res);
};
exports.makeFindMoviController = makeFindMoviController;
