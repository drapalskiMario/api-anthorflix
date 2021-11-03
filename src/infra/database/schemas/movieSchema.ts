import { model, Schema } from 'mongoose'
import { Movie } from '../../../entities/movie'

const movieSchema = new Schema<Movie>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  comments: [{
    authorId: { type: String, required: true },
    authorName: { type: String, required: true },
    comment: { type: String, required: true },
    commentsResponses: [{
      authorId: { type: String, required: true },
      authorName: { type: String, required: true },
      comment: { type: String, required: true }
    }]
  }],
  ratings: [{
    authorId: { type: String, required: true },
    rating: { type: Number, required: true }
  }],
  ratingAverage: { type: Number, required: false }
})

const MovieModel = model<Movie>('Movie', movieSchema)

export default MovieModel
