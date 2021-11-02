import { FindMovie } from '../../../src/usecase/movies/service/findMovie'
import { ErrorResponse, SuccessResponse } from '../../../src/usecase/utils/responses'
import { mockFindMovieByIdRepository } from '../../mocks/movie/findMovieByIdRepository'
import { mockFindMoviesRepository } from '../../mocks/movie/findMoviesRepository'
import { mockMovie } from '../../mocks/movie/movie'

const makeSut = () => {
  const findMoviesRepositoryStub = mockFindMoviesRepository()
  const findMovieByIdRepositoryStub = mockFindMovieByIdRepository()
  const sut = new FindMovie(findMoviesRepositoryStub, findMovieByIdRepositoryStub)

  return { sut, findMoviesRepositoryStub, findMovieByIdRepositoryStub }
}

describe('FindMovieService', () => {
  it('should return an error if the given id is not found', async () => {
    const { sut, findMovieByIdRepositoryStub } = makeSut()
    jest.spyOn(findMovieByIdRepositoryStub, 'findById').mockImplementationOnce(() => {
      return Promise.resolve(null)
    })
    const result = await sut.find('invalid_id')
    expect(result).toEqual(ErrorResponse('movie with id: invalid_id not found'))
  })

  it('should return success if valid id is provided', async () => {
    const { sut } = makeSut()
    const result = await sut.find('valid_id')
    expect(result).toEqual(SuccessResponse(mockMovie))
  })

  it('should return success if no id is provided', async () => {
    const { sut } = makeSut()
    const result = await sut.find()
    expect(result).toEqual(SuccessResponse([mockMovie, mockMovie, mockMovie]))
  })
})
