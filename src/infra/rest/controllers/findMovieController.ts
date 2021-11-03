import { Request, Response } from 'express'
import { FindMovie } from '../../../usecase/movies/service/findMovie'

export class FindMovieController {
  constructor (private readonly findMovie: FindMovie) {}
  async handle (req: Request, res: Response) {
    const { id } = req.params
    const result = await this.findMovie.find(id)
    if (result.error) {
      res.status(400).json({ error: result.error })
    } else {
      res.status(200).json({ sucess: result.success })
    }
  }
}
