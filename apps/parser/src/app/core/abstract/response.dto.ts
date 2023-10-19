import { HttpStatus } from '@nestjs/common';

export class ResponseDto<Data = unknown> {
  public status: HttpStatus;
  public message: string;
  public data?: Data;

  static generateResponse<Data = unknown>(status: HttpStatus, message: string, data?: Data): ResponseDto<Data> {
    return new ResponseDto(status, message, data);
  }

  constructor(status: HttpStatus, message: string, data?: Data) {
    this.status = status
    this.message = message;
    this.data = data;
  }
}

