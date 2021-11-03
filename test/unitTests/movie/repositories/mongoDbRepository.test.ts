import { MongoDbRepository } from '../../../../src/infra/database/repositories/mongoDbRepository'
import MovieModel from '../../../../src/infra/database/schemas/movieSchema'
import { CreateMovieDto } from '../../../../src/usecase/movies/dtos/createMovieDto'
import { UpdateMovieDto } from '../../../../src/usecase/movies/dtos/updateMovieDto'
import { mockCreateMovieDto } from '../../../mocks/movie/dtos/createMovieDto'
import { mockUpdateMovieDto } from '../../../mocks/movie/dtos/updateMovieDto'
import { mockMovie } from '../../../mocks/movie/entities/movie'
import { mockUpdateMovie } from '../../../mocks/movie/entities/updateMovie'
import { IdValidatorStub } from '../../../mocks/movie/validators/idValidator'

jest.mock('../../../../src/infra/database/schemas/movieSchema', () => ({
  create (createMovieDto: CreateMovieDto) {
    return Promise.resolve(mockMovie)
  },

  find () {
    return Promise.resolve([mockMovie, mockMovie, mockMovie])
  },

  findById (id: string) {
    return Promise.resolve(mockMovie)
  },

  findOneAndUpdate (id: string, updateMovieDto: UpdateMovieDto) {
    return Promise.resolve(mockUpdateMovie)
  },

  deleteOne (id: string) {
    Promise.resolve({ deletedCount: 1 })
  }
}))

describe('MongoDbRepository', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('create', () => {
    it('should returns null if movieModel return error', async () => {
      jest.spyOn(MovieModel, 'create').mockImplementationOnce(() => {
        return Promise.resolve(null)
      })
      const sut = new MongoDbRepository(MovieModel, new IdValidatorStub())
      const result = await sut.create(mockCreateMovieDto)
      expect(result).toBeNull()
    })

    it('should returns success on create', async () => {
      const sut = new MongoDbRepository(MovieModel, new IdValidatorStub())
      const result = await sut.create(mockCreateMovieDto)
      expect(result).toEqual(mockMovie)
    })
  })

  describe('find', () => {
    it('should returns an array of movies on sucess', async () => {
      const sut = new MongoDbRepository(MovieModel, new IdValidatorStub())
      const result = await sut.findAll()
      expect(result).toEqual([mockMovie, mockMovie, mockMovie])
    })
  })

  describe('findById', () => {
    it('should returns null if invalid id is provided', async () => {
      const idValidatorStub = new IdValidatorStub()
      const sut = new MongoDbRepository(MovieModel, idValidatorStub)
      jest.spyOn(idValidatorStub, 'isValid').mockImplementationOnce(() => false)
      const result = await sut.findById('invalid_id')
      expect(result).toBeNull()
    })

    it('should returns null if movieModel return null', async () => {
      jest.spyOn(MovieModel, 'findById').mockImplementationOnce((): any => {
        return Promise.resolve(null)
      })
      const sut = new MongoDbRepository(MovieModel, new IdValidatorStub())
      const result = await sut.findById('invalid_id')
      expect(result).toBeNull()
    })

    it('should return a movie on success', async () => {
      const sut = new MongoDbRepository(MovieModel, new IdValidatorStub())
      const result = await sut.findById('valid_id')
      expect(result).toEqual(mockMovie)
    })
  })

  describe('update', () => {
    it('should returns if invalid id is provided', async () => {
      const idValidatorStub = new IdValidatorStub()
      const sut = new MongoDbRepository(MovieModel, idValidatorStub)
      jest.spyOn(idValidatorStub, 'isValid').mockImplementationOnce(() => false)
      const result = await sut.update('invalid_id', mockUpdateMovieDto)
      expect(result).toBeNull()
    })

    it('should returns null if movieModel return null', async () => {
      jest.spyOn(MovieModel, 'findById').mockImplementationOnce((): any => {
        return Promise.resolve(null)
      })
      const sut = new MongoDbRepository(MovieModel, new IdValidatorStub())
      const result = await sut.update('valid_id', mockUpdateMovieDto)
      expect(result).toBeNull()
    })

    it('should return a movie on success', async () => {
      const sut = new MongoDbRepository(MovieModel, new IdValidatorStub())
      const result = await sut.update('valid_id', mockUpdateMovieDto)
      expect(result).toEqual(mockUpdateMovie)
    })
  })

  describe('delete', () => {
    it('should returns if invalid id is provided', async () => {
      const idValidatorStub = new IdValidatorStub()
      const sut = new MongoDbRepository(MovieModel, idValidatorStub)
      jest.spyOn(idValidatorStub, 'isValid').mockImplementationOnce(() => false)
      const result = await sut.delete('invalid_id')
      expect(result).toBeNull()
    })

    it('should returns a number on success', async () => {
      jest.spyOn(MovieModel, 'deleteOne').mockImplementationOnce((): any => {
        return Promise.resolve({ deletedCount: 1 })
      })
      const sut = new MongoDbRepository(MovieModel, new IdValidatorStub())
      const result = await sut.delete('valid_id')
      expect(result).toEqual(1)
    })
  })
})
