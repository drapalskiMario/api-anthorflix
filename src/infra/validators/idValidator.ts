import { Types } from 'mongoose'

export class IdValidator {
  isValid (id: string): boolean {
    return Types.ObjectId.isValid(id)
  }
}
