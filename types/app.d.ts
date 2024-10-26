declare global {
  export type Nullable<T> = T | null

  export type Keys<T extends Record<string, unknown>> = keyof T

  export type Values<T extends Record<string, unknown>> = T[Keys<T>]

  export type Indexed<K = string, T = unknown> = { [key: K]: T }


  declare type RootState = import("../src/app/appStore").RootState
  declare type AppDispatch = import("../src/app/appStore").AppDispatch
}

export {}
