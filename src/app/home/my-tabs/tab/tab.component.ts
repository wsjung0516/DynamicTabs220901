/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */
export class Tab {
  title: string;
  active: boolean;
}

import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'my-tab',
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
      <ng-container *ngIf="template"
        [ngTemplateOutlet]="template"
        [ngTemplateOutletContext]="{ person: dataContext }"
      >
      </ng-container>
    </div>
  `,
  styles: [
    `
    .pane{
      padding: 1em;
    }
  `
  ]

})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
  @Input() isCloseable = false;
  @Input() template: TemplateRef<any>;
  @Input() dataContext: any;
}
