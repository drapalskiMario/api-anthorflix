import { CreateMovieDto } from '../../../usecase/movies/dtos/createMovieDto'

export interface CreateMovieDtoValidator {
  createValidate(createMovieDto: CreateMovieDto): Promise<boolean>
}
