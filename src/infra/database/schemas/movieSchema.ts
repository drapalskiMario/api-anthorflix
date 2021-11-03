import { model, Schema } from 'mongoose'
import { Movie } from '../../../entities/movie'

const commentResponse = new Schema({
  authorId: { type: String, required: true },
  authorName: { type: String, required: true },
  comment: { type: String, required: true }
})

const commentSchema = new Schema({
  authorId: { type: String, required: true },
  authorName: { type: String, required: true },
  comment: { type: String, required: true },
  commentsResponses: [commentResponse]
})

const rating = new Schema({
  authorId: { type: String, required: true },
  rating: { type: Number, required: true }
})

const movieSchema = new Schema<Movie>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  comments: { type: [commentSchema], required: false },
  ratings: { tyre: [rating], required: false },
  ratingAverage: { type: Number, required: false }
})

const MovieModel = model<Movie>('Movie', movieSchema)

export default MovieModel
