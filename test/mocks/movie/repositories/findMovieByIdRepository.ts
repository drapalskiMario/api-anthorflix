import { Movie } from '../../../../src/entities/movie'
import { FindMovieByIdRepository } from '../../../../src/interfaceAdapters/repositories/movie/findMovieByIdRepository'
import { mockMovie } from '../entities/movie'

export const mockFindMovieByIdRepository = (): FindMovieByIdRepository => {
  class FindMovieByIdRepositoryStub implements FindMovieByIdRepository {
    findById (id: string): Promise<Movie> {
      return Promise.resolve(mockMovie)
    }
  }

  return new FindMovieByIdRepositoryStub()
}
