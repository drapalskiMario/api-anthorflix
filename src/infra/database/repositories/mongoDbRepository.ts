import { Model } from 'mongoose'
import { Movie } from '../../../entities/movie'
import { CreateMovieRepository } from '../../../interfaceAdapters/repositories/movie/createMovieRepository'
import { DeleteMovieRepository } from '../../../interfaceAdapters/repositories/movie/deleteMovieRepository'
import { FindMovieByIdRepository } from '../../../interfaceAdapters/repositories/movie/findMovieByIdRepository'
import { FindMoviesRepository } from '../../../interfaceAdapters/repositories/movie/findMoviesRepository'
import { UpdateMovieRepository } from '../../../interfaceAdapters/repositories/movie/updateMovieRepository'
import { CreateMovieDto } from '../../../usecase/movies/dtos/createMovieDto'
import { UpdateMovieDto } from '../../../usecase/movies/dtos/updateMovieDto'
import { IdValidator } from '../../validators/idValidator'

export class MongoDbRepository implements CreateMovieRepository, FindMoviesRepository, FindMovieByIdRepository, UpdateMovieRepository, DeleteMovieRepository {
  constructor (
    private readonly movieModel: Model<Movie>,
    private readonly idValidator: IdValidator
  ) {}

  async create (createMovieDto: CreateMovieDto): Promise<Movie> {
    const movieCreated = await this.movieModel.create(createMovieDto)
    if (!movieCreated) {
      return null
    }
    return movieCreated
  }

  async findAll (): Promise<Array<Movie>> {
    return await this.movieModel.find()
  }

  async findById (id: string): Promise<Movie> {
    const idIsValid = this.idValidator.isValid(id)
    if (!idIsValid) {
      return null
    }
    const movie = await this.movieModel.findById(id)
    if (!movie) {
      return null
    }
    return movie
  }

  async update (id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const idIsValid = this.idValidator.isValid(id)
    if (!idIsValid) {
      return null
    }
    const movie = await this.movieModel.findById(id)
    if (!movie) {
      return null
    }
    return await this.movieModel.findOneAndUpdate({ _id: id }, updateMovieDto, { new: true })
  }

  async delete (id: string): Promise<number> {
    const idIsValid = this.idValidator.isValid(id)
    if (!idIsValid) {
      return null
    }
    const movieDeleted = await this.movieModel.deleteOne({ _id: id })
    return movieDeleted.deletedCount
  }
}
