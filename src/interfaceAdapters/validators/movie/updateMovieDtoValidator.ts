import { UpdateMovieDto } from '../../../usecase/movies/dtos/updateMovieDto'

export interface UpdateMovieDtoValidator {
  validate(updateMovieDto: UpdateMovieDto): Promise<boolean>
}
