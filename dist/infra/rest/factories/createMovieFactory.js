"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateMovieController = void 0;
const createMovie_1 = require("../../../usecase/movies/service/createMovie");
const mongoDbRepository_1 = require("../../database/repositories/mongoDbRepository");
const movieSchema_1 = __importDefault(require("../../database/schemas/movieSchema"));
const dtosValidator_1 = require("../../validators/dtosValidator");
const idValidator_1 = require("../../validators/idValidator");
const createMovieController_1 = require("../controllers/createMovieController");
const makeCreateMovieController = async (req, res) => {
    const createMovieDtoValidator = new dtosValidator_1.DtoValidators();
    const idValidator = new idValidator_1.IdValidator();
    const createMovieRepository = new mongoDbRepository_1.MongoDbRepository(movieSchema_1.default, idValidator);
    const createMovieService = new createMovie_1.CreateMovie(createMovieDtoValidator, createMovieRepository);
    const createMovieController = new createMovieController_1.CreateMovieController(createMovieService);
    return createMovieController.handle(req, res);
};
exports.makeCreateMovieController = makeCreateMovieController;
