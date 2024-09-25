import ansis from 'ansis';
import {
  getBackgroundAnsisColor,
  getForegroundAnsisColor,
} from './helpers/get-anssis-color.js';
import {
  TerminalColor,
  TerminalMisc,
  TerminalStyles,
} from './types/type-color.js';

export function terminalColor(color: TerminalColor): (x: string) => string;

export function terminalColor(
  color: TerminalColor,
  bgColor: TerminalColor
): (x: string) => string;

export function terminalColor(
  color: TerminalColor,
  bgColor: TerminalColor,
  misc: TerminalMisc
): (x: string) => string;

export function terminalColor(
  color: TerminalColor,
  bgColor: TerminalColor,
  misc: TerminalMisc,
  styles: TerminalStyles
): (x: string) => string;

/**
 * Generates a function to apply terminal color and styles to a string.
 *
 * This function can take up to four arguments: `color`, `bgColor`, `misc`, and `styles`.
 *
 * - `color`: The foreground color of the text.
 * - `bgColor`: The background color of the text.
 * - `misc`: Miscellaneous styles such as underline, blink, etc.
 * - `styles`: Additional styles such as bold, italic, etc.
 *
 * The function returns another function that takes a string as an argument and applies the specified color and styles to it.
 *
 * @param {...(TerminalColor | TerminalColor | TerminalColor | TerminalColor | TerminalMisc | TerminalStyles)} args - The arguments to apply to the string.
 * @returns {(x: string) => string} - A function that applies the specified color and styles to a string.
 */
export function terminalColor(
  ...args:
    | [TerminalColor]
    | [TerminalColor, TerminalColor]
    | [TerminalColor, TerminalColor, TerminalMisc]
    | [TerminalColor, TerminalColor, TerminalMisc, TerminalStyles]
): (x: string) => string {
  const [color, bgColor, misc, styles] = args;
  let ansisFun = getForegroundAnsisColor(ansis, color);

  if (bgColor) ansisFun = getBackgroundAnsisColor(ansisFun, bgColor);
  if (misc) ansisFun = ansisFun[misc];
  if (styles) ansisFun = ansisFun[styles];

  return (x: string) => {
    return ansisFun(x);
  };
}
