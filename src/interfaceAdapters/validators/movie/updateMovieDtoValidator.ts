import { UpdateMovieDto } from '../../../usecase/movies/dtos/updateMovieDto'

export interface UpdateMovieDtoValidator {
  updateValidate(updateMovieDto: UpdateMovieDto): Promise<boolean>
}
