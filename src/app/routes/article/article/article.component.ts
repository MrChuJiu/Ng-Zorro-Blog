import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  Visible = false;
  VisibleArticlemanage = false;

  radioValue = 'Myarticles';
  menus: any[] = [
    {
      key: 'Myarticles',
      title: '我的文章',
    },
    {
      key: 'Mycollection',
      title: '我的收藏',
    }
  ];
  ngOnInit(): void {

  }
  constructor(private router:Router,private searchService:SearchService) {

  }
  to(key: any) {
    this.searchService.setarticleIsSearch(this.Visible);
    this.router.navigateByUrl(`/article/${key}`);
  }

  showSearch(flag:boolean):void{
       this.Visible = flag;
       this.searchService.setarticleIsSearch(flag);
  }
  showPublishArticle() {
    this.router.navigateByUrl(`/publisharticle`);
  }

  showArticlemanage(flag:boolean):void{
    this.VisibleArticlemanage = !this.VisibleArticlemanage;
     if(this.VisibleArticlemanage) {
      this.router.navigateByUrl(`/article/Myarticlemanage`);
     }else
     {
      this.router.navigateByUrl(`/article/${this.radioValue}`);
     }
  }



}
