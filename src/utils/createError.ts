export enum ErrorTypes {
  ValidationError = "Validation Error",
  NotFoundError = "Not Found Error",
  UnauthorizedError = "Unauthorized Error",
  ForbiddenError = "Forbidden Error",
  ConflictError = "Conflict Error",
  InternalServerError = "Internal Server Error",
  BadRequestError = "Bad Request Error",
}

const ErrorStatusCodes: Record<ErrorTypes, number> = {
  [ErrorTypes.ValidationError]: 400,
  [ErrorTypes.NotFoundError]: 404,
  [ErrorTypes.UnauthorizedError]: 401,
  [ErrorTypes.ForbiddenError]: 403,
  [ErrorTypes.ConflictError]: 409,
  [ErrorTypes.InternalServerError]: 500,
  [ErrorTypes.BadRequestError]: 400,
};

export class CustomError extends Error {
  public statusCode: number;
  public errorType: ErrorTypes;

  constructor(
    message: string,
    errorType: ErrorTypes = ErrorTypes.InternalServerError
  ) {
    super(message);
    this.statusCode = ErrorStatusCodes[errorType];
    this.errorType = errorType;
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
export const createError = (
  message: string,
  errorType: ErrorTypes = ErrorTypes.InternalServerError
): CustomError => {
  return new CustomError(message, errorType);
}