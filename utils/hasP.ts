/**
 * 正体不明のオブジェクトが指定したプロパティを持つかチェックする関数
 * @param x 
 * @param name 
 * @returns 
 */

 export function hasProperty<K extends string>(
    x: unknown,
    name: K
  ): x is { [M in K]: unknown } {
    return x instanceof Object && name in x;
}

/**
 * 正体不明のオブジェクトが指定したプロパティ(複数)を持つかチェックする関数
 * @param x 
 * @param names 
 * @returns 
 */
export function hasProperties<K extends string>(
    x: unknown,
    ...names: K[]
  ): x is { [M in K]: unknown } {
    return (
      x instanceof Object && names.every(prop => prop in x)
    );
  }