"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovieController = void 0;
class UpdateMovieController {
    constructor(updateMovie) {
        this.updateMovie = updateMovie;
    }
    async handle(req, res) {
        const { id } = req.params;
        const result = await this.updateMovie.update(id, req.body);
        if (result.error) {
            return res.status(400).json({ error: result.error });
        }
        else {
            return res.status(204).send();
        }
    }
}
exports.UpdateMovieController = UpdateMovieController;
