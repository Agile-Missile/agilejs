/**
 * Represents the options for generating a terminal link.
 *
 * @property {('stdout' | 'stderr')?} target - The target stream for the link. Defaults to 'stdout'.
 * @property {(false | ((text: string, url: string) => string))?} fallback - The fallback behavior when the link is not supported. If false, the original text is returned. If a function, it is called with the text and URL to generate a fallback string.
 */
export type TypeLinkOptions = {
  target?: 'stdout' | 'stderr';
  fallback?: false | ((text: string, url: string) => string);
};
