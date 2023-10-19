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
  const pureDate = new Date(date);

  pureDate.setFullYear(year);
  pureDate.setMonth(month);
  pureDate.setDate(day);
  pureDate.setHours(options.includeHours ? getHours(date) : 0);
  pureDate.setMinutes(options.includeMinutes ? getMinutes(date) : 0);
  pureDate.setSeconds(options.includeSeconds ? getSeconds(date) : 0);
  pureDate.setMilliseconds(options.includeMilliseconds ? getMilliseconds(date) : 0);
  return pureDate;
}
