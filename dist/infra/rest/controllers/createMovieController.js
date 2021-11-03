"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovieController = void 0;
class CreateMovieController {
    constructor(createMovieSerice) {
        this.createMovieSerice = createMovieSerice;
    }
    async handle(req, res) {
        const result = await this.createMovieSerice.create(req.body);
        if (result.error) {
            res.status(400).json({ error: result.error });
        }
        else {
            res.status(201).send();
        }
    }
}
exports.CreateMovieController = CreateMovieController;
