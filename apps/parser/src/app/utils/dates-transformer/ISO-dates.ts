import { getPureDate } from './pure-dates';
import { getNextDayDate } from './next-dates';

export function getNowDateISO(): string {
  return new Date().toISOString();
}

export function getPureTodayDayDateISO(): string {
  return getPureDate(new Date()).toISOString();
}

export function getPureNextDayDateISO(): string {
  const nextDayDate = getNextDayDate(new Date());
  return getPureDate(nextDayDate).toISOString();
}
