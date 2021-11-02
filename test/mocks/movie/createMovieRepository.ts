import { Movie } from '../../../src/entities/movie'
import { CreateMovieRepository } from '../../../src/interfaceAdapters/repositories/movie/createMovieRepository'
import { CreateMovieDto } from '../../../src/usecase/movies/dtos/createMovieDto'
import { mockMovie } from './movie'

export const mockCreateMovieRepository = (): CreateMovieRepository => {
  class CreateMovieRepositoryStub implements CreateMovieRepository {
    create (createMovieDto: CreateMovieDto): Promise<Movie> {
      return Promise.resolve(mockMovie)
    }
  }

  return new CreateMovieRepositoryStub()
}
