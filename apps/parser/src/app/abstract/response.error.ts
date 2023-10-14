import { HttpStatus } from '@nestjs/common';

// TODO: extends Error or using Exception filters
export class ResponseError {
  public status: HttpStatus;
  public message: string;

  constructor(message: string, status: HttpStatus) {
    this.status = status
    this.message = message
  }
}
