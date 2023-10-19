import {
  getDayNumber,
  getHours,
  getMilliseconds,
  getMinutes,
  getMonthNumber,
  getSeconds,
  getYearNumber,
} from './other';

export type GetPureDateOptions = {
  includeHours?: boolean;
  includeMinutes?: boolean;
  includeSeconds?: boolean;
  includeMilliseconds?: boolean;
};

export function getPureDate(
  date: Date,
  options: GetPureDateOptions = {
    includeHours: false,
    includeMinutes: false,
    includeSeconds: false,
    includeMilliseconds: false,
  },
): Date {
  const year = getYearNumber(date);
  const month = getMonthNumber(date);
  const day = getDayNumber(date);
  const hours = getHours(date);
  const minutes = getMinutes(date);
  const seconds = getSeconds(date);
  const milliseconds = getMilliseconds(date);
  const pureDate = new Date(date);

  pureDate.setFullYear(year);
  pureDate.setMonth(month);
  pureDate.setDate(day);
  pureDate.setHours(options.includeHours ? hours : 0);
  pureDate.setMinutes(options.includeMinutes ? minutes : 0);
  pureDate.setSeconds(options.includeSeconds ? seconds : 0);
  pureDate.setMilliseconds(options.includeMilliseconds ? milliseconds : 0);
  return pureDate;
}
