export interface Response {
  success?: string
  error?: string
}

export function SuccessResponse (message: string): Response {
  return { success: message }
}

export function ErrorResponse (message: string): Response {
  return { error: message }
}
