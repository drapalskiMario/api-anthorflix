import { Movie } from '../../../../src/entities/movie'
import { FindMoviesRepository } from '../../../../src/interfaceAdapters/repositories/movie/findMoviesRepository'
import { mockMovie } from '../entities/movie'

export const mockFindMoviesRepository = (): FindMoviesRepository => {
  class FindMoviesRepositoryStub implements FindMoviesRepository {
    findAll (): Promise<Array<Movie>> {
      return Promise.resolve([mockMovie, mockMovie, mockMovie])
    }
  }

  return new FindMoviesRepositoryStub()
}
