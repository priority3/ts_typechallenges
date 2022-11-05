// import type { Equal } from '@type-challenges/utils'
type IsEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2)
    ? true
    : false

type a = IsEqual<undefined, null>

type Includes<Value extends any[], Item> =
  IsEqual<Value[0], Item> extends true
    ? true
    : Item extends undefined ? false
      : Value extends [Value[0], ...infer rest]
        ? Includes<rest, Item>
        : false

// type mytype<T> = T extends (infer U)[] ? U : never;

// type T1 = mytype<[string,number]>

// type Trim<S extends string> = S extends `${' ' | '\t' | '\n'}${infer R}`
//   ? Trim<R>
//   : S extends `${infer L}${' ' | '\t' | '\n'}`
//   ? Trim<L>
//   : S;
// type c = Trim<' \n Hello World  '> // expected to be 'Hello World  '

// type Reverse<T extends unknown[], U extends unknown[] = []> = [] extends T
//   ? U
//   : T extends [infer L, ...infer R]
//   ? Reverse<R, [L, ...U]>
//   : U;

// type T1 = Reverse<[0,1],[3,4]> // [string,number]

