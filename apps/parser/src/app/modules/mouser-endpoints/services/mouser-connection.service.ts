import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { EnvironmentVariables } from '../../../interfaces/environment/environment.interface';


@Injectable()
export class MouserConnectionService {
  public readonly apiUrl = this.configService.get<string>("MOUSER_API_V2_URL");
  public readonly apiKey = this.configService.get<string>("MOUSER_API_KEY");

  constructor(private readonly configService: ConfigService<EnvironmentVariables>) {}
}
