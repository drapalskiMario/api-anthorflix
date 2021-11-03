"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMovieController = void 0;
class FindMovieController {
    constructor(findMovie) {
        this.findMovie = findMovie;
    }
    async handle(req, res) {
        const { id } = req.params;
        const result = await this.findMovie.find(id);
        if (result.error) {
            res.status(400).json({ error: result.error });
        }
        else {
            res.status(200).json({ sucess: result.success });
        }
    }
}
exports.FindMovieController = FindMovieController;
