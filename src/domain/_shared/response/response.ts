import { HttpStatusCode } from '@domain/_shared/response/http-status';

export type SuccessResponse<R> = {
  error: null;
  response: Ok<R>;
};

export type ErrorResponse = {
  error: ErrorData;
  response: null;
};

export type Response<R> = SuccessResponse<R> | ErrorResponse;

export type Ok<T> = {
  code: HttpStatusCode;
  data: T;
};

export type ErrorData = {
  code: HttpStatusCode;
  message: string;
  data?: Error;
};
