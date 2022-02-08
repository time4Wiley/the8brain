export interface IChildKeyForArrayProperty {
  getKeyForPropertyChild(propertyName: string): string;
}

export function isIChildKeyForArrayProperty(
  object: any
): object is IChildKeyForArrayProperty {
  return 'getKeyForPropertyChild' in object;
}
