type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : T

// infer
//  类似 设置一个x，后续可以基于x做一些处理
