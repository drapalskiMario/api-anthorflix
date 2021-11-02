import { Movie } from '../../../entities/movie'
import { UpdateMovieDto } from '../../../usecase/movies/dtos/updateMovieDto'

export interface UpdateMovieRepository {
  update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie>
}
