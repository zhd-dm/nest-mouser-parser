import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { AxiosResponse } from "axios";
import { map, Observable } from "rxjs";

import { MouserManufacturersRoot } from '@mouser-swagger';
import { EnvironmentVariables } from "../../../interfaces/environment.interface";

@Injectable()
export class ManufacturerListApiService {
  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
    private readonly httpService: HttpService,
  ) {}

  getManufactures(): Observable<MouserManufacturersRoot> {
    const mouserApiUrl = this.configService.get<string>("MOUSER_API_V2_URL");
    const apiKey = this.configService.get<string>("MOUSER_API_KEY");

    return this.httpService
      .get(`${mouserApiUrl}/search/manufacturerlist?apiKey=${apiKey}`)
      .pipe(map<AxiosResponse<MouserManufacturersRoot>, MouserManufacturersRoot>(axiosResponse => axiosResponse.data));
  }
}
