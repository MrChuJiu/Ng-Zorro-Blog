import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from 'src/app/core/shartup/search.service';

@Component({
  selector: 'app-explore-user',
  templateUrl: './explore-user.component.html',
  styleUrls: ['./explore-user.component.less']
})
export class ExploreUserComponent implements OnInit {
  Visible:boolean;

  loading = false;
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];
   // tslint:disable-next-line:no-any
   array = [ 1, 2, 3, 4 ];
   validateForm: FormGroup;
   menus: any[] = [
     {
       value: '1',
       title: '活跃度',
     },
     {
       value: '2',
       title: '文章数',
     },
     {
       value: '3',
       title: '粉丝数',
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

     this.validateForm = this.fb.group({
       userName: [ null ],
       password: [ null ],
       rangePicker : [ [] ],
       formLayout: [ null ],
     });
   }

}
