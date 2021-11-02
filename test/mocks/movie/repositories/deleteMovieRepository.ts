import { DeleteMovieRepository } from '../../../../src/interfaceAdapters/repositories/movie/deleteMovieRepository'

export const mockDeleteMovieRepository = (): DeleteMovieRepository => {
  class DeleteMovieRepositoryStub implements DeleteMovieRepository {
    delete (id: string): Promise<number> {
      return Promise.resolve(1)
    }
  }

  return new DeleteMovieRepositoryStub()
}
