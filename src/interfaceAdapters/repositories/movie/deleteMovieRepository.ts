export interface DeleteMovieRepository {
  delete (id: string): Promise<number>
}
