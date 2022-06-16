// extract 两者相同的
type First<T extends any[]> = Extract<T[number], T[0]>
