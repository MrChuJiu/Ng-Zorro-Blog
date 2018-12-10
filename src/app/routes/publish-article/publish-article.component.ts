import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-publish-article',
  templateUrl: './publish-article.component.html',
  styleUrls: ['./publish-article.component.less']
})
export class PublishArticleComponent implements OnInit {


  @ViewChild('inputElement') inputElement: ElementRef;

  Visible:boolean;
  validateForm: FormGroup;
  inputValue = '';
  tags = [ 'Unremovable', 'Tag 2', 'Tag 3' ];
  inputVisible = false;
  expandKeys = [ '100', '1001' ];
  value: string;
  nodes = [ {
    title   : 'parent 1',
    key     : '100',
    children: [ {
      title   : 'parent 1-0',
      key     : '1001',
      children: [
        { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
        { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
      ]
    }, {
      title   : 'parent 1-1',
      key     : '1002',
      children: [
        { title: 'leaf 1-1-0', key: '10020', isLeaf: true }
      ]
    } ]
  } ];

  constructor(private fb: FormBuilder) { }

  onChange($event: string): void {
    console.log($event);
  }
  handleInputConfirm(): void {
    if (this.inputValue && this.tags.indexOf(this.inputValue) === -1) {
      this.tags.push(this.inputValue);
    }
    this.inputValue = '';
    this.inputVisible = false;
  }
  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  ngOnInit(): void {

    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);

    // mock async
    setTimeout(() => {
      this.value = '1001';
    }, 1000);
    this.validateForm = this.fb.group({
      userName: [ '123' ],
      inputValue: [ '123' ],
      password: [ null ],
      rangePicker : [ [] ],
      formLayout: [ null ],
    });
  }

}
