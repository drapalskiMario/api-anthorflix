import { Movie } from '../../entities/movie'

export interface Response {
  success?: string | Movie | Array<Movie>
  error?: string
}

export function SuccessResponse (message: string | Movie | Array<Movie>): Response {
  return { success: message }
}

export function ErrorResponse (message: string): Response {
  return { error: message }
}
