import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let exceptionResponse = undefined;

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | null = null;
    let payload: any = null;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
      exceptionResponse = exception.getResponse();
      payload = (exceptionResponse as HttpException)?.message || undefined;
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    const errorCode =
      typeof exceptionResponse === 'object'
        ? (exceptionResponse as any).errorCode
        : undefined;

    response.status(status).json({
      statusCode: status,
      errorCode,
      message: message || 'Internal server error',
      path: request.url,
      timestamp: new Date().toISOString(),
      payload,
    });
  }
}
