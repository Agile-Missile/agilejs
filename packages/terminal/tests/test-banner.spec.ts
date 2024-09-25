import { terminalBanner } from '../src/index.js';

describe('cli banner', () => {
  let mockConsole;
  beforeAll(() => {
    mockConsole = vi.spyOn(console, 'log');
  });
  afterAll(() => {
    mockConsole.mockRestore();
  });
  it('should correct print cli banner', () => {
    terminalBanner('agile', {
      align: 'left',
      gradient: ['red', 'blue'],
    });
    expect(mockConsole).toHaveBeenCalledTimes(1);
    terminalBanner('A elegant small typescript based front-end dev-kits', {
      align: 'left',
      font: 'console',
      gradient: ['yellow', 'green'],
    });
    expect(mockConsole).toHaveBeenCalledTimes(2);
  });
});
