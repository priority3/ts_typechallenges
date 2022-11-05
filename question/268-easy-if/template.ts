// type If<C,T,P> = C extends boolean ? C extends true ? T : P : never
type If<C extends boolean, T, P> = C extends true ? T : P

