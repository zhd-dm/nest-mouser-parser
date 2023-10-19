export type Entries<T extends { [K in keyof T]: unknown }> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Keys<T extends Record<string, unknown>> = (keyof T)[];
