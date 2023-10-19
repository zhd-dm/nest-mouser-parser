import { catchError, Observable } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';

export function catchAndThrowException<T>(): (source$: Observable<T>) => Observable<T> {
  return source$ =>
    source$.pipe(
      catchError(error => {
        throw new HttpException(error?.response, error?.status ?? HttpStatus.INTERNAL_SERVER_ERROR, error);
      }),
    );
}
