import { IdValidator } from '../../../../src/infra/validators/idValidator'

export class IdValidatorStub implements IdValidator {
  isValid (id: string): boolean {
    return true
  }
}
