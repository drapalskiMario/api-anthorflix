"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMovieController = void 0;
class DeleteMovieController {
    constructor(deleteMovie) {
        this.deleteMovie = deleteMovie;
    }
    async handle(req, res) {
        const { id } = req.params;
        const result = await this.deleteMovie.delete(id);
        if (result.error) {
            return res.status(400).json({ error: result.error });
        }
        else {
            return res.status(204).send();
        }
    }
}
exports.DeleteMovieController = DeleteMovieController;
