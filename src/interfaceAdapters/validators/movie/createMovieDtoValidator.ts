import { CreateMovieDto } from '../../../usecase/movies/dtos/createMovieDto'

export interface CreateMovieDtoValidator {
  validate(createMovieDto: CreateMovieDto): Promise<boolean>
}
