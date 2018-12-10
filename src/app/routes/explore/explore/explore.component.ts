import { Component, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { Router, ActivationEnd } from '@angular/router';
import { filter, debounceTime } from 'rxjs/operators';
import { SearchService } from 'src/app/service/search.service';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.less']
})
export class ExploreComponent implements OnInit {
  Visible = false;
  radioValue = 'article';
  menus: any[] = [
    {
      key: 'article',
      title: '发现文章',
    },
    {
      key: 'user',
      title: '发现博友',
    }
  ];
  ngOnInit(): void {

  }
  constructor(private router:Router,private searchService:SearchService) {

  }
  to(key: any) {
    this.searchService.setexploreIsSearch(this.Visible);
    this.router.navigateByUrl(`/explore/${key}`);
  }

  showSearch(flag:boolean):void{
       this.Visible = flag;
       this.searchService.setexploreIsSearch(flag);
  }
}
