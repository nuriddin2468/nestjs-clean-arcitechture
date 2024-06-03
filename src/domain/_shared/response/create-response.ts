import { HttpStatusCode } from '@domain/_shared/response/http-status';
import {
  ErrorResponse,
  SuccessResponse,
} from '@domain/_shared/response/response';

export function responseOk<T>(
  data: T,
  code: HttpStatusCode,
): SuccessResponse<T> {
  return {
    error: null,
    response: {
      data,
      code,
    },
  };
}

export function responseError(
  message: string,
  code: HttpStatusCode,
  error?: Error,
): ErrorResponse {
  return {
    error: {
      code,
      message,
      data: error,
    },
    response: null,
  };
}
