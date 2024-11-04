/**
 * This type utility combines override options with default options to generate a new type.
 *
 * @template Options - The base options type.
 * @template OverrideOptions - The options to override, which must be a partial of the base options.
 * @template DefaultOptions - The default options, which must be a required version of the base options.
 */
export type OverrideOptions<
  Options extends Required<Options>,
  OverrideOptions extends Partial<Options>,
  DefaultOptions extends Required<Options>,
> = {
  [Key in keyof Options]: OverrideOptions[Key] extends Options[Key]
    ? OverrideOptions[Key]
    : DefaultOptions[Key];
};
