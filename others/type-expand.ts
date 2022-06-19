// 
type expandRecursive<T> = T extends object ?
  T extends infer O ?
  {[P in keyof O]:expandRecursive<O[P]> }:
  never
:T


type str = {
  name:string
}

type ooo = string | number

type obj = {
  c:str,
  age:number,
  cc:ooo
}

// union 不行
type obj1 = expandRecursive<obj> 

