/**
 * Represents the default colors available for terminal output.
 * @property {string} white - The hexadecimal code for white.
 * @property {string} black - The hexadecimal code for black.
 * @property {string} red - The hexadecimal code for red.
 * @property {string} green - The hexadecimal code for green.
 * @property {string} blue - The hexadecimal code for blue.
 * @property {string} yellow - The hexadecimal code for yellow.
 * @property {string} cyan - The hexadecimal code for cyan.
 * @property {string} magenta - The hexadecimal code for magenta.
 * @property {string} gray - The hexadecimal code for gray.
 * @property {string} silver - The hexadecimal code for silver.
 * @property {string} maroon - The hexadecimal code for maroon.
 * @property {string} olive - The hexadecimal code for olive.
 * @property {string} lime - The hexadecimal code for lime.
 * @property {string} teal - The hexadecimal code for teal.
 * @property {string} navy - The hexadecimal code for navy.
 * @property {string} purple - The hexadecimal code for purple.
 */
export const DEFAULT_COLOR = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  yellow: '#FFFF00',
  cyan: '#00FFFF',
  magenta: '#FF00FF',
  gray: '#808080',
  silver: '#C0C0C0',
  maroon: '#800000',
  olive: '#808000',
  lime: '#008000',
  teal: '#008080',
  navy: '#000080',
  purple: '#800080',
};

/**
 * Represents the types of colors that can be used for terminal output.
 * This includes keys from DEFAULT_COLOR, hexadecimal color codes, numbers, and RGB color codes.
 */
export type TerminalColor =
  | keyof typeof DEFAULT_COLOR
  | `#${string}`
  | number
  | [number, number, number];

/**
 * Represents miscellaneous styles that can be applied to terminal output.
 * This includes 'visible', 'reset', 'inverse', and 'hidden'.
 */
export type TerminalMisc = 'visible' | 'reset' | 'inverse' | 'hidden';

/**
 * Represents the styles that can be applied to terminal output.
 * This includes 'bold', 'dim', 'italic', 'inverse', 'strikethrough', and 'underline'.
 */
export type TerminalStyles =
  | 'bold'
  | 'dim'
  | 'italic'
  | 'inverse'
  | 'strikethrough'
  | 'underline';
