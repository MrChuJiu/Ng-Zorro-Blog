import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-articlemanage',
  templateUrl: './articlemanage.component.html',
  styleUrls: ['./articlemanage.component.less']
})
export class ArticlemanageComponent implements OnInit {


  allChecked = false;
  disabledButton = true;
  checkedNumber = 0;
  displayData: Array<{ name: string; age: number; address: string; checked: boolean }> = [];
  operating = false;
  dataSet = [];
  indeterminate = false;


  Visible:boolean;

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
    this.searchService.getarticleIsSearch().subscribe( data => {
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

    for (let i = 0; i < 46; i++) {
      this.dataSet.push({
        name   : `Edward King ${i}`,
        Refer    : i * 5,
        give    : i * 3,
        collection    : i * 2,
        CreateTime    : '2018-12-6',
        checked: false
      });
    }
  }




  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean }>): void {
    this.displayData = $event;
  }

  refreshStatus(): void {
    const allChecked = this.displayData.every(value => value.checked === true);
    const allUnChecked = this.displayData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.disabledButton = !this.dataSet.some(value => value.checked);
    this.checkedNumber = this.dataSet.filter(value => value.checked).length;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => data.checked = value);
    this.refreshStatus();
  }

  operateData(): void {
    this.operating = true;
    setTimeout(_ => {
      this.dataSet.forEach(value => value.checked = false);
      this.refreshStatus();
      this.operating = false;
    }, 1000);
  }



}
