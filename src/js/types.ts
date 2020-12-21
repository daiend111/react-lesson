/* define deep readonly */
type Primitive = undefined | null | boolean | string | number | Function | Date | Symbol;
export type DeepReadonly<T> =
  T extends Primitive ? T :
    T extends Array<infer U> ? ReadonlyArray<U> :
      T extends Set<infer M> ? ReadonlySet<M> :
        T extends Map<infer K, infer V> ? ReadonlyMap<K, V> :
          { readonly [K in keyof T]: DeepReadonly<T[K]> };