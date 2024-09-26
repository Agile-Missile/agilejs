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

/**
 * Generates a function to apply terminal color and styles to a given string.
 *
 * @param color - The color(s) to apply. Can be a single color for foreground or an array of two colors for foreground and background.
 * @param styles - Optional. The style to apply to the text.
 * @param misc - Optional. Miscellaneous properties to apply to the text.
 * @returns A function that takes a string and returns the string with the applied color and styles.
 */
export function terminalColor(
  color: [TerminalColor] | [TerminalColor, TerminalColor],
  styles?: TerminalStyles,
  misc?: TerminalMisc
): (x: string) => string {
  let ansisFun: ansis.Ansis;
  if (color.length === 1) {
    ansisFun = getForegroundAnsisColor(ansis, color[0]);
  } else {
    ansisFun = getForegroundAnsisColor(ansis, color[0]);
    ansisFun = getBackgroundAnsisColor(ansisFun, color[1]);
  }
  if (misc) ansisFun = ansisFun[misc];
  if (styles) ansisFun = ansisFun[styles];

  return (x: string) => {
    return ansisFun(x);
  };
}
