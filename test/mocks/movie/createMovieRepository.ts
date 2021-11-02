import { Movie } from '../../../src/entities/movie'
import { CreateMovieRepository } from '../../../src/interfaceAdapters/repositories/movie/createMovieRepository'
import { CreateMovieDto } from '../../../src/usecase/movies/dtos/createMovieDto'

export const mockCreateMovieRepository = (): CreateMovieRepository => {
  class CreateMovieRepositoryStub implements CreateMovieRepository {
    create (createMovieDto: CreateMovieDto): Promise<Movie> {
      return Promise.resolve({
        id: '6170dcb0f0c3d844448558ab',
        name: 'Exterminador do Futuro',
        url: 'htttps://aws-s3/exterminador-do-futuro',
        comments: null,
        ratingAverage: null,
        ratings: null
      })
    }
  }

  return new CreateMovieRepositoryStub()
}
