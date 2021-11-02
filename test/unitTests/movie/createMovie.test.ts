import { Movie } from '../../../src/entities/movie'
import { CreateMovie } from '../../../src/usecase/movies/service/createMovie'
import { ErrorResponse, SuccessResponse } from '../../../src/usecase/utils/responses'
import { mockCreateMovieDto } from '../../mocks/movie/dtos/createMovieDto'
import { mockCreateMovieDtoValidator } from '../../mocks/movie/validators/createMovieDtoValidator'
import { mockCreateMovieRepository } from '../../mocks/movie/repositories/createMovieRepository'

const makeSut = () => {
  const createMovieDtoValidatorStub = mockCreateMovieDtoValidator()
  const createMovieRepositoryStub = mockCreateMovieRepository()
  const sut = new CreateMovie(createMovieDtoValidatorStub, createMovieRepositoryStub)

  return { sut, createMovieDtoValidatorStub, createMovieRepositoryStub }
}

describe('CreateMovieService', () => {
  it('should return error if createMovieDtoValidator return error', async () => {
    const { sut, createMovieDtoValidatorStub } = makeSut()
    jest.spyOn(createMovieDtoValidatorStub, 'validate').mockImplementationOnce((): Promise<boolean> => {
      return Promise.resolve(true)
    })
    const result = await sut.create(mockCreateMovieDto)
    expect(result).toEqual(ErrorResponse('invalid params'))
  })

  it('should return error if createMovieRepositoryStub return error', async () => {
    const { sut, createMovieRepositoryStub } = makeSut()
    jest.spyOn(createMovieRepositoryStub, 'create').mockImplementationOnce((): Promise<Movie> => {
      return Promise.resolve(null)
    })
    const result = await sut.create(mockCreateMovieDto)
    expect(result).toEqual(ErrorResponse('error in film creation'))
  })

  it('should return success', async () => {
    const { sut } = makeSut()
    const result = await sut.create(mockCreateMovieDto)
    expect(result).toEqual(SuccessResponse('successfully created movie'))
  })
})
