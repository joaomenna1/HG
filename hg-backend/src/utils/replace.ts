export type Replace<OrignalType, ReplaceTypes> = Omit<
  OrignalType,
  keyof ReplaceTypes
> &
  ReplaceTypes;
