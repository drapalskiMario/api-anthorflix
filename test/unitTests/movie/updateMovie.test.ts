import { UpdateMovie } from '../../../src/usecase/movies/service/updateMovie'
import { ErrorResponse, SuccessResponse } from '../../../src/usecase/utils/responses'
import { mockFindMovieByIdRepository } from '../../mocks/movie/repositories/findMovieByIdRepository'
import { mockUpdateMovieDto } from '../../mocks/movie/dtos/updateMovieDto'
import { mockUpdateMovieDtoValidator } from '../../mocks/movie/validators/updateMovieDtoValidator'
import { mockUpdateMovieRepository } from '../../mocks/movie/repositories/updateMovieRepository'

const makeSut = () => {
  const updateMovieDtoValidatorStub = mockUpdateMovieDtoValidator()
  const findMovieByIdRepositoryStub = mockFindMovieByIdRepository()
  const updateMovieRepositoryStub = mockUpdateMovieRepository()
  const sut = new UpdateMovie(updateMovieDtoValidatorStub, findMovieByIdRepositoryStub, updateMovieRepositoryStub)

  return { sut, updateMovieDtoValidatorStub, findMovieByIdRepositoryStub, updateMovieRepositoryStub }
}

describe('UpdateMovieService', () => {
  it('should returns error if updateMovieDtoValidator return error', async () => {
    const { sut, updateMovieDtoValidatorStub } = makeSut()
    jest.spyOn(updateMovieDtoValidatorStub, 'validate').mockImplementationOnce(() => {
      return Promise.resolve(true)
    })
    const result = await sut.update('valid_id', mockUpdateMovieDto)
    expect(result).toEqual(ErrorResponse('invalid params'))
  })

  it('should returns error if invalid id is provided', async () => {
    const { sut, findMovieByIdRepositoryStub } = makeSut()
    jest.spyOn(findMovieByIdRepositoryStub, 'findById').mockImplementationOnce(() => {
      return Promise.resolve(null)
    })
    const result = await sut.update('invalid_id', mockUpdateMovieDto)
    expect(result).toEqual(ErrorResponse('movie with id: invalid_id not found'))
  })

  it('should returns error if updateMovieRepository return error', async () => {
    const { sut, updateMovieRepositoryStub } = makeSut()
    jest.spyOn(updateMovieRepositoryStub, 'update').mockImplementationOnce(() => {
      return Promise.resolve(null)
    })
    const result = await sut.update('valid_id', mockUpdateMovieDto)
    expect(result).toEqual(ErrorResponse('error in film update'))
  })

  it('should returns success on update', async () => {
    const { sut } = makeSut()
    const result = await sut.update('valid_id', mockUpdateMovieDto)
    expect(result).toEqual(SuccessResponse('successfully updated movie'))
  })
})
