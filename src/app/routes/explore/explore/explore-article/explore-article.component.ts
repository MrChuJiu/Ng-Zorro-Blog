import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-explore-article',
  templateUrl: './explore-article.component.html',
  styleUrls: ['./explore-article.component.less']
})
export class ExploreArticleComponent implements OnInit {


  Visible:boolean;

  // tslint:disable-next-line:no-any
  data: any[] = [];
  array = [ 1, 2, 3, 4 ];
  validateForm: FormGroup;
  menus: any[] = [
    {
      value: '1',
      title: '按热度',
    },
    {
      value: '2',
      title: '按时间',
    },
    {
      value: '3',
      title: '按标题',
    }
  ];
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }



  constructor(private fb: FormBuilder,private searchService:SearchService) {
    this.searchService.getexploreIsSearch().subscribe( data => {
      this.Visible = data;
    })
  }




  ngOnInit(): void {



    this.loadData(1);
    this.validateForm = this.fb.group({
      userName: [ null ],
      password: [ null ],
      rangePicker : [ [] ],
      formLayout: [ null ],
    });
  }




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
