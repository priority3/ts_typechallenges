//
type expandRecursive<T> = T extends object ?
  T extends infer O ?
      { [P in keyof O]: expandRecursive<O[P]> } :
    never
  : T

interface str {
  name: string
}

type ooo = string | number

interface obj {
  c: str
  age: number
  cc: ooo
}

// union 不行
type obj1 = expandRecursive<obj>

