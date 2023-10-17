import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import {
  AppAccountTableService
} from '../../db-data-handler/tables/application-configuration-tables/app-account/app-account-table.service';
import { ResponseDto } from '../../../abstract/response.dto';

@Injectable()
export class MouserApiKeyGetterService {
  public get allowedApiKey(): string {
    return ''
  }

  public get accountIds(): Observable<ResponseDto<number[] | undefined>> {
    return this.appAccountTableService.getAccountIds()
  }

  constructor(
    private readonly appAccountTableService: AppAccountTableService,) {
  }

}
