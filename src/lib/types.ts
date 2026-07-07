export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type Dictionary<T> = Record<string, T>;

export type AsyncResult<T, E = Error> = Promise<
  { success: true; data: T } | { success: false; error: E }
>;

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
