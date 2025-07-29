import { Component, Input } from '@angular/core';

@Component({
    selector: 'showcase-title',
    template: `
                  <div class="pl-2 pt-4 pb-2">
                      <h4 class="d-inline">
                          <ng-content></ng-content>
                      </h4>
                      <a href="https://github.com/systelab/systelab-components/tree/master/projects/showcase/src/app/components/{{href}}"
                         target="_blank" tabIndex="-1">
                          <img class="d-inline" src="gh.ico" alt="View on GitHub" width="18px" height="18px">
                      </a>
                  </div>
			  `,
    styles: [`
        img {
            position: relative;
            top: -4px;
            left: 4px;
        }`],
    standalone: false
})
export class ShowcaseTitleComponent {
	@Input() title = '';
	@Input() href = '';
}
