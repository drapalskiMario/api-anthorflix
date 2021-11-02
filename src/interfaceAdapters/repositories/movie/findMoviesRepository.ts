import { Movie } from '../../../entities/movie'

export interface FindMoviesRepository {
  findAll(): Promise<Array<Movie>>
}
