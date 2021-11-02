import { CreateMovieDto } from '../dtos/createMovieDto'
import { ErrorResponse, Response, SuccessResponse } from '../../utils/responses'
import { CreateMovieRepository } from '../../../interfaceAdapters/repositories/movie/createMovieRepository'
import { CreateMovieDtoValidator } from '../../../interfaceAdapters/validators/movie/createMovieDtoValidator'

export class CreateMovie {
  constructor (
    private readonly createMovieDtoValidator: CreateMovieDtoValidator,
    private readonly createMovieRepository: CreateMovieRepository
  ) { }

  async create (createMovieDto: CreateMovieDto): Promise<Response> {
    const errorsInParameters = await this.createMovieDtoValidator.validate(createMovieDto)
    if (errorsInParameters) {
      return ErrorResponse('invalid params')
    }
    const createdMovie = await this.createMovieRepository.create(createMovieDto)
    if (!createdMovie) {
      return ErrorResponse('error in film creation')
    }
    return SuccessResponse('successfully created movie')
  }
}
