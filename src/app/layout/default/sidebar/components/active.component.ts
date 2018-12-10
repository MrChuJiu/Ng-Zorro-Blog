import { Component } from '@angular/core';

@Component({
  selector: 'app-active',
  template: `
      <nz-card nzTitle="活跃博友" [nzExtra]="extraTemplate">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </nz-card>
    <ng-template #extraTemplate>
      <a>More</a>
    </ng-template>
  `,
  styles  : [
      `p {
      margin: 0;
    }`
  ]
})
export class ActiveComponent {
}
