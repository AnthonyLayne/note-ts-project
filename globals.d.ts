type Maybe<T> = T | undefined;
type Nullable<T> = T | null;
type ValueOf<T extends object> = T[keyof T];

type NullableKey<T> = { [P in keyof T]?: T[P] | null };
type NullableKeys<T, K extends Key<T> = Key<T>> = Pick<T, Exclude<Key<T>, K>> & NullableKey<Pick<T, K>>;

type Mutable<T> = { -readonly [K in keyof T]: T[K] };

/**
 * Make one or more keys optional. It is equivalent to Partial if the second type argument is omitted.
 * ```
 * ex: Optional<{ a: string; b: number; c: boolean }, 'a' | 'b'> -> { a?: string; b?: number; c: boolean }
 * ```
 */
type Optional<T, K extends Key<T> = Key<T>> = Pick<T, Exclude<Key<T>, K>> & Partial<Pick<T, K>>;

/**
 * Enforce one or more optional keys to be defined. The opposite of Optional.
 * ```
 * ex: Mandate<{ a?: string; b?: number; c: boolean }, 'a' | 'b'> -> { a: string; b: number; c: boolean }
 * ```
 */
type Mandate<T extends {}, K extends Key<T>> = Omit<T, K> & { [MK in K]-?: NonNullable<T[MK]> };

/** Enforce that all the keys are either defined or null.
 * ```
 * ex: MandateKeysNonUndefinable<{ a?: string; b?: number; c: boolean }> -> { a: Nullable<string>; b: Nullable<number>; c: Nullable<boolean> }
 * ```
 */
type MandateKeysNonUndefinable<T, K extends Key<T> = Key<T>> = Pick<T, Exclude<Key<T>, K>> & { [MK in K]-?: T[MK] extends undefined ? never : T[MK] };

/**
 * A type to require at least one property of a type.
 * ```
 * ex: RequireAtLeastOne<{ a: string; b: number; c?: boolean }, 'a' | 'b'> -> { a?: string, b?: number, c?: boolean } will throw an error without at least 'a' or 'b'
 * ```
 */
type RequireAtLeastOne<T, Keys extends Key<T> = Key<T>> = Pick<T, Exclude<Key<T>, Keys>> &
  { [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>> }[Keys];
