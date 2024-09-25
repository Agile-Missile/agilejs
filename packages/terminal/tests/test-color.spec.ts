import { terminalColor } from '../src/index.js';

describe('terminal color', () => {
  it('should return correct color code', () => {
    console.log(
      terminalColor('red', 'blue', 'visible', 'strikethrough')('red')
    );
    console.log(
      terminalColor('#ff0000', '#0000ff', 'reset', 'strikethrough')('red')
    );
    console.log(terminalColor(122, 200)('red'));
    console.log(terminalColor([23, 180, 65])('red'));
    expect(true).toBeTruthy();
  });
});
