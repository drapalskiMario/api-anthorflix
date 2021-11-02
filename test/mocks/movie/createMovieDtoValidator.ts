import { CreateMovieDtoValidator } from '../../../src/interfaceAdapters/validators/movie/createMovieDtoValidator'
import { CreateMovieDto } from '../../../src/usecase/movies/dtos/createMovieDto'

export const mockCreateMovieDtoValidator = (): CreateMovieDtoValidator => {
  class CreateMovieDtoValidatorStub implements CreateMovieDtoValidator {
    async validate (createMovieDto: CreateMovieDto): Promise<boolean> {
      return Promise.resolve(false)
    }
  }

  return new CreateMovieDtoValidatorStub()
}
