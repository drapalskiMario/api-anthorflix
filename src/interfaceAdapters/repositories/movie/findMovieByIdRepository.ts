import { Movie } from '../../../entities/movie'

export interface FindMovieByIdRepository {
  findById (id: string): Promise<Movie>
}
