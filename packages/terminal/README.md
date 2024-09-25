# @agilejs/terminal

## Terminal Utilities for Node.js

This package provides a set of utilities for enhancing your Node.js terminal experience. It includes features like:

- **Terminal Links:** Create clickable links in your terminal output.
- **Terminal Banners:** Display eye-catching banners with customizable styles.
- **Terminal Colors:** Apply colors and styles to your terminal text with ease.

## Installation

```bash
npm install terminal-utilities
```

## Usage

### Terminal Links

```javascript
import { terminalLink } from 'terminal-utilities';

const link = terminalLink('Visit our website', 'https://www.example.com');

console.log(link); // Outputs a clickable link in the terminal
```

**Options:**

- `target`: Specify the output stream ('stdout' or 'stderr').
- `fallback`: Provide a fallback text or function if hyperlinks are not supported.

### Terminal Banners

```javascript
import { terminalBanner } from 'terminal-utilities';

terminalBanner('Welcome to the terminal', {
  font: 'block',
  color: 'green',
  align: 'center',
});
```

**Options:**

- `font`: Select a font style (refer to the `cfonts` package for options).
- `color`: Set the banner color.
- `align`: Specify text alignment.
- `space`: Adjust space between characters.
- `gradient`: Enable a color gradient.
- `lineHeight`: Control line height.
- `letterSpacing`: Adjust letter spacing.

### Terminal Colors

```javascript
import { terminalColor } from 'terminal-utilities';

const red = terminalColor('red');
const greenBg = terminalColor('white', 'green');
const boldUnderline = terminalColor('yellow', 'blue', 'underline', 'bold');

console.log(red('Red text'));
console.log(greenBg('Text on green background'));
console.log(boldUnderline('Bold underlined text'));
```

**Options:**

- `color`: Foreground color.
- `bgColor`: Background color.
- `misc`: Miscellaneous styles (e.g., `underline`, `blink`, `dim`).
- `styles`: Additional styles (e.g., `bold`, `italic`, `strikethrough`).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
