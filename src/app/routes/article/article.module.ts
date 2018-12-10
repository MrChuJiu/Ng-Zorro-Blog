import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { MyarticlesComponent } from './article/myarticles/myarticles.component';
import { MycollectionComponent } from './article/mycollection/mycollection.component';
import { ArticleRoutingModule } from './article.module-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticlemanageComponent } from './article/articlemanage/articlemanage.component';

@NgModule({
  declarations: [ArticleComponent, MyarticlesComponent, MycollectionComponent, ArticlemanageComponent],
  imports: [
    SharedModule,
    ArticleRoutingModule,
  ]
})
export class ArticleModule { }
