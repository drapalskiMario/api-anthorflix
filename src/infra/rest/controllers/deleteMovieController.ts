import { Request, Response } from 'express'
import { DeleteMovie } from '../../../usecase/movies/service/deleteMovie'

export class DeleteMovieController {
  constructor (private readonly deleteMovie: DeleteMovie) {}

  async handle (req: Request, res: Response) {
    const { id } = req.params
    const result = await this.deleteMovie.delete(id)
    if (result.error) {
      return res.status(400).json({ error: result.error })
    } else {
      return res.status(204).send()
    }
  }
}
