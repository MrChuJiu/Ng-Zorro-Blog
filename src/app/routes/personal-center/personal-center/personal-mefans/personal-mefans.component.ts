import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-mefans',
  templateUrl: './personal-mefans.component.html',
  styleUrls: ['./personal-mefans.component.less']
})
export class PersonalMefansComponent implements OnInit {
  data: any[] = [];

  ngOnInit(): void {
    this.loadData(1);
  }
  constructor() {}

  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((i, index) => {
      return {
        href: 'http://ant.design',
        title: `ant design part ${index} (page: ${pi})`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      };
    });
  }

}
