import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'searchResultHighlight'
})
export class SearchResultHighlightPipe implements PipeTransform {

  public constructor(protected sanitizer: DomSanitizer) {
  }
  
  transform(result: string, searchTerm: string) {

    var regex = new RegExp(searchTerm,"gi");
    const highlightedResult = result.replace(regex, `<span class='highlight-term'>${searchTerm}</span>`);

    // https://angular.io/api/platform-browser/DomSanitizer
    const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, highlightedResult);

    if (!sanitized) {
      return '';
    }
    
    return this.sanitizer.bypassSecurityTrustHtml(sanitized);
  }

}
