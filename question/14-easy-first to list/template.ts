type First<T extends any[]> = Extract<T[number], T[0]>
