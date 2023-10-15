import { getDayNumber, getMonthNumber, getYearNumber } from './other';

export function getPureDate(date: Date): Date {
  const year = getYearNumber(date);
  const month = getMonthNumber(date);
  const day = getDayNumber(date);
  const pureDate = new Date(date);

  pureDate.setFullYear(year);
  pureDate.setMonth(month);
  pureDate.setDate(day);
  pureDate.setHours(0);
  pureDate.setMinutes(0);
  pureDate.setSeconds(0);
  pureDate.setMilliseconds(0);
  return pureDate;
}
