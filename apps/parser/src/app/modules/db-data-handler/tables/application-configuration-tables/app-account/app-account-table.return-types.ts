import { ResponseDto } from '../../../../../core/abstract/response.dto';

export type GetAccountIdsReturn = ResponseDto<{ account_id: number }[]>

export type GetHowManyCallsAccountMakeTodayReturn = ResponseDto<number>

export type GetApiV2KeyByAccountIdReturn = ResponseDto<string | undefined>

export type CreateAccountReturn = ResponseDto<number>
