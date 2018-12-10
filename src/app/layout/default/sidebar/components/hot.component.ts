import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot',
  template: `
  <nz-card  nzTitle="热门文章" [nzExtra]="extraTemplate">
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
export class HotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
