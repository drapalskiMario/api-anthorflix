import { Request, Response } from 'express'
import { UpdateMovie } from '../../../usecase/movies/service/updateMovie'

export class UpdateMovieController {
  constructor (private readonly updateMovie: UpdateMovie) {}

  async handle (req: Request, res: Response) {
    const { id } = req.params
    const result = await this.updateMovie.update(id, req.body)
    if (result.error) {
      return res.status(400).json({ error: result.error })
    } else {
      return res.status(204).send()
    }
  }
}
