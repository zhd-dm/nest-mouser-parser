export function getNowDateISO(): string {
  return new Date().toISOString();
}

export function getStartTodayDateISO(): string {
  const startTodayDate = new Date().setHours(0, 0, 0, 0);
  return new Date(startTodayDate).toISOString();
}

export function getEndTodayDateISO(): string {
  const endTodayDate = new Date().setHours(24, 0, 0, 0);
  return new Date(endTodayDate).toISOString();
}
