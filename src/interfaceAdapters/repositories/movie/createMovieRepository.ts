import { Movie } from '../../../entities/movie'
import { CreateMovieDto } from '../../../usecase/movies/dtos/createMovieDto'

export interface CreateMovieRepository {
  create (createMovieDto: CreateMovieDto): Promise<Movie>
}
