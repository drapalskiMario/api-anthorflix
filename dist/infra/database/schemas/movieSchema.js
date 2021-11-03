"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    comments: [{
            authorId: { type: String, required: true },
            authorName: { type: String, required: true },
            comment: { type: String, required: true },
            commentsResponses: [{
                    authorId: { type: String, required: true },
                    authorName: { type: String, required: true },
                    comment: { type: String, required: true }
                }]
        }],
    ratings: [{
            authorId: { type: String, required: true },
            rating: { type: Number, required: true }
        }],
    ratingAverage: { type: Number, required: false }
});
const MovieModel = (0, mongoose_1.model)('Movie', movieSchema);
exports.default = MovieModel;
