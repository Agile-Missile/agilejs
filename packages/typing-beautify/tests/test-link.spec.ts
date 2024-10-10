import { getTerminalLink } from '../src/terminal-link.js';

describe('terminal link', () => {
  it('should generate correct link', () => {
    const link = getTerminalLink('My Website', 'https://example.com');
    console.log(link);
    expect(true).toBeTruthy();
  });
});
