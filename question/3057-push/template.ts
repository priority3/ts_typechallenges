type Push<T, U> = T extends [...infer R] ? [...R, U] : never
