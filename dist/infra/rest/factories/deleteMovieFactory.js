"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteMovieController = void 0;
const deleteMovie_1 = require("../../../usecase/movies/service/deleteMovie");
const mongoDbRepository_1 = require("../../database/repositories/mongoDbRepository");
const movieSchema_1 = __importDefault(require("../../database/schemas/movieSchema"));
const idValidator_1 = require("../../validators/idValidator");
const deleteMovieController_1 = require("../controllers/deleteMovieController");
const makeDeleteMovieController = async (req, res) => {
    const idValidator = new idValidator_1.IdValidator();
    const findAndDeleteMovieRepository = new mongoDbRepository_1.MongoDbRepository(movieSchema_1.default, idValidator);
    const deleteMovie = new deleteMovie_1.DeleteMovie(findAndDeleteMovieRepository, findAndDeleteMovieRepository);
    const deleteMovieController = new deleteMovieController_1.DeleteMovieController(deleteMovie);
    return deleteMovieController.handle(req, res);
};
exports.makeDeleteMovieController = makeDeleteMovieController;
