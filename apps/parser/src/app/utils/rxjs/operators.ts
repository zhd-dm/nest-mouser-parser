import { catchError, Observable } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';

export function catchAndThrowException<T>(status = HttpStatus.INTERNAL_SERVER_ERROR): (source$: Observable<T>) => Observable<T> {
  return source$ =>
    source$.pipe(
      catchError(error => {
        throw new HttpException(error, status);
      }),
    );
}
