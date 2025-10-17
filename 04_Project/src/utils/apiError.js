class apiError extends Error {
  constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
    super(message);

    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;
    this.data = null;

    // Ensures that the name of this error class appears correctly in stack traces
    this.name = this.constructor.name;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}


export {apiError};