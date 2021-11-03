import { Request, Response } from 'express'
import { CreateMovie } from '../../../usecase/movies/service/createMovie'

export class CreateMovieController {
  constructor (private readonly createMovieSerice: CreateMovie) {}

  async handle (req: Request, res: Response) {
    const result = await this.createMovieSerice.create(req.body)
    if (result.error) {
      res.status(400).json({ error: result.error })
    }
    res.status(201).send()
  }
}
