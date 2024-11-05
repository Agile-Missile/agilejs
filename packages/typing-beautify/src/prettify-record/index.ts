export type PrettifyRecord<Type> = {
  [Key in keyof Type]: Type[Key];
} & {};
