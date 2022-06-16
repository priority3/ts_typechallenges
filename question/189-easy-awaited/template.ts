type MyAwaited<T> = T extends Promise<infer P> 
  ? MyAwaited<P> : T
