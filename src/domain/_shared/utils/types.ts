type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends CallableFunction ? never : K;
}[keyof T];
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
