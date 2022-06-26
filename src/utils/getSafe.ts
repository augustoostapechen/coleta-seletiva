export function getSafe<T>(array: T): T | undefined {
  if(!Array.isArray(array) || array.length <= 0) return undefined;

  return array;
}