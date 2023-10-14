import { HttpStatus } from '@nestjs/common';

export class ResponseDto<Data = unknown> {
  public data?: Data | null;
  public message?: string;
  public status: HttpStatus;

  static generateResponse<Data = unknown>(status: HttpStatus, data?: Data, message?: string): ResponseDto<Data | null> {
    return new ResponseDto(status, data, message);
  }

  constructor(status: HttpStatus, data?: Data, message?: string) {
    this.status = status
    this.data = data;
    this.message = message;
  }
}

