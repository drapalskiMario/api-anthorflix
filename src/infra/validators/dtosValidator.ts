import Joi from 'joi'
import { CreateMovieDtoValidator } from '../../interfaceAdapters/validators/movie/createMovieDtoValidator'
import { UpdateMovieDtoValidator } from '../../interfaceAdapters/validators/movie/updateMovieDtoValidator'
import { CreateMovieDto } from '../../usecase/movies/dtos/createMovieDto'
import { UpdateMovieDto } from '../../usecase/movies/dtos/updateMovieDto'

export class DtoValidators implements CreateMovieDtoValidator, UpdateMovieDtoValidator {
  createValidate (createMovieDto: CreateMovieDto): Promise<boolean> {
    const JoiValidator = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      url: Joi.string().uri().required()
    })
    const { error } = JoiValidator.validate(createMovieDto)
    if (error) {
      return Promise.resolve(true)
    }
    return Promise.resolve(false)
  }

  updateValidate (updateMovieDto: UpdateMovieDto): Promise<boolean> {
    const JoiValidator = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
      url: Joi.string().uri().required()
    })
    const { error } = JoiValidator.validate(updateMovieDto)
    if (error) {
      return Promise.resolve(true)
    }
    return Promise.resolve(false)
  }
}
