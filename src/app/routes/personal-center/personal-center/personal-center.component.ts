import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.less']
})
export class PersonalCenterComponent implements OnInit {
  tabs = [
    {
      active: true,
      selected:'粉丝',
      name  : '粉丝',
      key: 'PersonalMefans',
      icon  : 'apple'
    },
    {
      active: false,
      name  : '关注',
      key: 'PersonalMefocus',
      icon  : 'android'
    },
    {
      active: false,
      name  : '设置',
      key: 'PersonalMesetting',
      icon  : 'android'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  to(key: any) {
    this.router.navigateByUrl(`/personalcenter/${key}`);
  }

}
