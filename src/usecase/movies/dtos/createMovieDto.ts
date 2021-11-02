export type CreateMovieDto = {
  name: string,
  url: string
  comments?: [{
    authorId: string
    authorName: string
    comment: string
    commentsResponses?: {
      authorId: string
      authorName: string
      comment: string
    }
  }]
  ratings?: [{
    authorId: string
    rating: number
  }]
  ratingAverage?: number
}
