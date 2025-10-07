class apiResponse {
  constructor(statusCode, data, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;

  }
};

export {apiResponse};