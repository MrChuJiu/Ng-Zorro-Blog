import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { MyarticlesComponent } from './article/myarticles/myarticles.component';
import { MycollectionComponent } from './article/mycollection/mycollection.component';
import { ArticlemanageComponent } from './article/articlemanage/articlemanage.component';



const routes: Routes = [
  {
        path: '',
        component: ArticleComponent,
        children: [
          { path: '', redirectTo: 'Myarticles', pathMatch: 'full' },
          {
            path: 'Myarticles',
            component: MyarticlesComponent,
          },
          {
            path: 'Mycollection',
            component: MycollectionComponent,
          },
          {
            path: 'Myarticlemanage',
            component: ArticlemanageComponent,
          },
        ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
