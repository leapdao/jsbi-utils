import JSBI from 'jsbi';

export const { 
  BigInt, toNumber,
  equal, greaterThan, lessThan, greaterThanOrEqual, lessThanOrEqual,
  add, divide, subtract, multiply, exponentiate,
} = require('jsbi');

export type BigIntType = JSBI;

export type BigIntable = BigIntType | Number | string;

export const ZERO = BigInt(0);

export const biEqual = (a: BigIntable, b: BigIntable): boolean => {
  return equal(bi(a), bi(b))
};

export const biMax = (a: BigIntable, b: BigIntable): BigIntType => {
  if (greaterThan(bi(a), bi(b))) return bi(b);

  return bi(a);
};

export const bi = (value: BigIntType | Number | string): BigIntType => {
  if (typeof value === 'string') {
    return BigInt(Number(value) ? value : 0);
  }
  return BigInt(value || '');
}

