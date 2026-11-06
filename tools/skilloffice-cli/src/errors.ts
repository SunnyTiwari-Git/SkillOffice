/** An error caused by bad user input or a broken file. The message is shown to the user as is. */
export class UserFacingError extends Error {
  override name = 'UserFacingError';
}

/** Thrown when a second correction cycle is attempted without human approval. */
export class CorrectionLimitError extends UserFacingError {
  override name = 'CorrectionLimitError';
}
