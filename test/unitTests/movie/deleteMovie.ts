import { ErrorResponse, SuccessResponse } from '../../../src/usecase/utils/responses'
import { mockFindMovieByIdRepository } from '../../mocks/movie/repositories/findMovieByIdRepository'
import { mockDeleteMovieRepository } from '../../mocks/movie/repositories/deleteMovieRepository'
import { DeleteMovie } from '../../../src/usecase/movies/service/deleteMovie'

const makeSut = () => {
  const findMovieByIdRepositoryStub = mockFindMovieByIdRepository()
  const deleteMovieRepositoryStub = mockDeleteMovieRepository()
  const sut = new DeleteMovie(findMovieByIdRepositoryStub, deleteMovieRepositoryStub)

  return { sut, findMovieByIdRepositoryStub, deleteMovieRepositoryStub }
}

describe('DeleteMovieService', () => {
  it('should returns error if invalid id is provided', async () => {
    const { sut, findMovieByIdRepositoryStub } = makeSut()
    jest.spyOn(findMovieByIdRepositoryStub, 'findById').mockImplementationOnce(() => {
      return Promise.resolve(null)
    })
    const result = await sut.delete('invalid_id')
    expect(result).toEqual(ErrorResponse('movie with id: invalid_id not found'))
  })

  it('should returns error if deleteMovieRepository return error', async () => {
    const { sut, deleteMovieRepositoryStub } = makeSut()
    jest.spyOn(deleteMovieRepositoryStub, 'delete').mockImplementationOnce(() => {
      return Promise.resolve(null)
    })
    const result = await sut.delete('valid_id')
    expect(result).toEqual(ErrorResponse('error in film update'))
  })

  it('should returns success on update', async () => {
    const { sut } = makeSut()
    const result = await sut.delete('valid_id')
    expect(result).toEqual(SuccessResponse('successfully deleted movie'))
  })
})
