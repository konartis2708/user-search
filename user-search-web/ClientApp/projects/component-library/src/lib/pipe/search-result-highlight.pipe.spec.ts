import { SecurityContext } from '@angular/core';
import { SearchResultHighlightPipe } from './search-result-highlight.pipe';

describe('SearchResultHighlightPipe', () => {
  let pipe: SearchResultHighlightPipe;
  beforeAll(() => {
      const fakeSanitizer: any = {
        sanitize: (context: SecurityContext, value: string) => { return value; },
        bypassSecurityTrustHtml: (value: string) => { return value; },
      }
      pipe = new SearchResultHighlightPipe(fakeSanitizer);
      expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should highlight the selected text as html', () => {
    const pipeResult = pipe.transform('Adam lawrence', 'law');

    expect(pipeResult).toBe(`Adam <span class='highlight-term'>law</span>rence`);
  });

  it('should highlight the selected text as html ignoring case', () => {
    const pipeResult = pipe.transform('Adam lawrence', 'Ada');

    expect(pipeResult).toBe(`<span class='highlight-term'>Ada</span>m lawrence`);
  });
});
