"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbRepository = void 0;
class MongoDbRepository {
    constructor(movieModel, idValidator) {
        this.movieModel = movieModel;
        this.idValidator = idValidator;
    }
    async create(createMovieDto) {
        const movieCreated = await this.movieModel.create(createMovieDto);
        if (!movieCreated) {
            return null;
        }
        return movieCreated;
    }
    async findAll() {
        return await this.movieModel.find();
    }
    async findById(id) {
        const idIsValid = this.idValidator.isValid(id);
        if (!idIsValid) {
            return null;
        }
        const movie = await this.movieModel.findById(id);
        if (!movie) {
            return null;
        }
        return movie;
    }
    async update(id, updateMovieDto) {
        const idIsValid = this.idValidator.isValid(id);
        if (!idIsValid) {
            return null;
        }
        const movie = await this.movieModel.findById(id);
        if (!movie) {
            return null;
        }
        return await this.movieModel.findOneAndUpdate({ _id: id }, updateMovieDto, { new: true });
    }
    async delete(id) {
        const idIsValid = this.idValidator.isValid(id);
        if (!idIsValid) {
            return null;
        }
        const movieDeleted = await this.movieModel.deleteOne({ _id: id });
        return movieDeleted.deletedCount;
    }
}
exports.MongoDbRepository = MongoDbRepository;
