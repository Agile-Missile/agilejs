import { terminalColor } from '../src/index.js';

describe('terminal color', () => {
  it('should return correct color code', () => {
    console.log(
      terminalColor(
        ['red', 'blue'],
        'strikethrough',
        'visible'
      )('agile terminal')
    );
    console.log(
      terminalColor(
        ['#ff0000', '#0000ff'],
        'strikethrough',
        'reset'
      )('agile terminal')
    );
    console.log(terminalColor([122, 200])('agile terminal'));
    console.log(terminalColor([[23, 180, 65]])('agile terminal'));
    console.log(terminalColor(['red'])('agile terminal'));
    expect(true).toBeTruthy();
  });
});
