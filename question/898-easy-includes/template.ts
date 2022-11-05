import type { Equal } from '@type-challenges/utils'

type Includes<T extends readonly any[], U> =
  T extends [infer R, ...infer L] ? true extends Equal<R, U> ? true : Includes<L, U> : false

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
