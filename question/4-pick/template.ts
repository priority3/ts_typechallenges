// type MyPick<T, K extends keyof T> = Pick<T, K>
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
