"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRouter = void 0;
/* eslint-disable no-undef */
const express_1 = require("express");
const createMovieFactory_1 = require("../factories/createMovieFactory");
const deleteMovieFactory_1 = require("../factories/deleteMovieFactory");
const findMovieFactory_1 = require("../factories/findMovieFactory");
const updateMovieFactory_1 = require("../factories/updateMovieFactory");
const movieRouter = (0, express_1.Router)();
exports.movieRouter = movieRouter;
movieRouter.post('/movies', createMovieFactory_1.makeCreateMovieController);
movieRouter.get('/movies', findMovieFactory_1.makeFindMoviController);
movieRouter.get('/movies/:id', findMovieFactory_1.makeFindMoviController);
movieRouter.put('/movies/:id', updateMovieFactory_1.makeUpdateMovieController);
movieRouter.delete('/movies/:id', deleteMovieFactory_1.makeDeleteMovieController);
