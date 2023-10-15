export function getNowDate(): Date {
  return new Date()
}

export function getNowDateISO(): string {
  return getNowDate().toISOString()
}
