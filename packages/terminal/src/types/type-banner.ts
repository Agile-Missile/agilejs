export interface TerminalBannerOptions {
  /** define the font face */
  font:
    | 'console'
    | 'block'
    | 'simpleBlock'
    | 'simple'
    | '3d'
    | 'simple3d'
    | 'chrome'
    | 'huge'
    | 'shade'
    | 'slick'
    | 'grid'
    | 'pallet'
    | 'tiny';

  /** define text alignment */
  align: 'left' | 'center' | 'right' | 'top' | 'bottom';

  /** define all colors */
  colors: Array<
    | 'system'
    | 'black'
    | 'red'
    | 'green'
    | 'yellow'
    | 'blue'
    | 'magenta'
    | 'cyan'
    | 'white'
    | 'gray'
    | 'redBright'
    | 'greenBright'
    | 'yellowBright'
    | 'blueBright'
    | 'magentaBright'
    | 'cyanBright'
    | 'whiteBright'
    | '#ff8800'
    | 'hex-colors'
  >;

  /** define the background color, you can also use `backgroundColor` here as key */
  background: string;

  /** define letter spacing */
  letterSpacing: number;

  /** define the line height */
  lineHeight: number;

  /** define if the output text should have empty lines on top and on the bottom */
  space: boolean;

  /** define how many character can be on one line */
  maxLength: number | string;

  /** define your two gradient colors */
  gradient: boolean | [string, string];

  /** define if you want to recalculate the gradient for each new line */
  independentGradient: boolean;

  /** define if this is a transition between colors directly */
  transitionGradient: boolean;

  /** define if the line breaks should be CRLF (`\r\n`) over the default LF (`\n`) */
  rawMode: boolean;
}
