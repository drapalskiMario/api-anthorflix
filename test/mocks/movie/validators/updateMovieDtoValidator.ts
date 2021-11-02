import { UpdateMovieDtoValidator } from '../../../../src/interfaceAdapters/validators/movie/updateMovieDtoValidator'
import { UpdateMovieDto } from '../../../../src/usecase/movies/dtos/updateMovieDto'

export const mockUpdateMovieDtoValidator = (): UpdateMovieDtoValidator => {
  class UpdateMovieDtoValidatorStub implements UpdateMovieDtoValidator {
    async validate (updateMovieDto: UpdateMovieDto): Promise<boolean> {
      return Promise.resolve(false)
    }
  }

  return new UpdateMovieDtoValidatorStub()
}
