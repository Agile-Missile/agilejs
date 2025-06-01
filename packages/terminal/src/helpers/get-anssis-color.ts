import type Ansis from 'ansis';
import type { TerminalColor } from '../types/type-color.js';
import { DEFAULT_COLOR } from '../types/type-color.js';

/**
 * Checks if the given color is a default color.
 * @param color - The color to check.
 * @returns True if the color is a default color, false otherwise.
 */
export const isDefaultColor = (
  color: TerminalColor
): color is keyof typeof DEFAULT_COLOR => {
  return typeof color === 'string' && !color.startsWith('#');
};

/**
 * Checks if the given color is a hexadecimal color.
 * @param color - The color to check.
 * @returns True if the color is a hexadecimal color, false otherwise.
 */
export const isHexColor = (color: TerminalColor): color is `#${string}` => {
  return typeof color === 'string' && color.startsWith('#');
};

/**
 * Checks if the given color is an RGB color.
 * @param color - The color to check.
 * @returns True if the color is an RGB color, false otherwise.
 */
export const isRgbColor = (
  color: TerminalColor
): color is [number, number, number] => {
  return Array.isArray(color) && color.length === 3;
};

/**
 * Checks if the given color is a number.
 * @param color - The color to check.
 * @returns True if the color is a number, false otherwise.
 */
export const isNumberColor = (color: TerminalColor): color is number => {
  return typeof color === 'number';
};

/**
 * Generates the foreground Ansis color based on the given color.
 * @param ansis - The Ansis instance.
 * @param color - The color to generate the Ansis color for.
 * @returns The Ansis color for the foreground.
 */
export const getForegroundAnsisColor = (
  ansis: typeof Ansis,
  color?: TerminalColor
) => {
  if (!color) return ansis.hex(DEFAULT_COLOR.transparent);
  if (isDefaultColor(color)) return ansis.hex(DEFAULT_COLOR[color]);
  if (isHexColor(color)) return ansis.hex(color);
  if (isRgbColor(color)) return ansis.rgb(...color);
  if (isNumberColor(color) && color >= 0 && color <= 255)
    return ansis.fg(color);
  return ansis.ansi256(color);
};

/**
 * Generates the background Ansis color based on the given color.
 * @param ansis - The Ansis instance.
 * @param color - The color to generate the Ansis color for.
 * @returns The Ansis color for the background.
 */
export const getBackgroundAnsisColor = (
  ansis: typeof Ansis,
  color?: TerminalColor
) => {
  if (!color) return ansis.bgHex(DEFAULT_COLOR.transparent);
  if (isDefaultColor(color)) return ansis.bgHex(DEFAULT_COLOR[color]);
  if (isHexColor(color)) return ansis.bgHex(color);
  if (isRgbColor(color)) return ansis.bgRgb(...color);
  if (isNumberColor(color) && color >= 0 && color <= 255)
    return ansis.bg(color);
  return ansis.bgAnsi256(color);
};
