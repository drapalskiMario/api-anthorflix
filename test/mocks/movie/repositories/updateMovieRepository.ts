import { Movie } from '../../../../src/entities/movie'
import { UpdateMovieRepository } from '../../../../src/interfaceAdapters/repositories/movie/updateMovieRepository'
import { UpdateMovieDto } from '../../../../src/usecase/movies/dtos/updateMovieDto'
import { mockUpdateMovie } from '../entities/updateMovie'

export const mockUpdateMovieRepository = (): UpdateMovieRepository => {
  class UpdateMovieRepositoryStub implements UpdateMovieRepository {
    update (id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
      return Promise.resolve(mockUpdateMovie)
    }
  }

  return new UpdateMovieRepositoryStub()
}
