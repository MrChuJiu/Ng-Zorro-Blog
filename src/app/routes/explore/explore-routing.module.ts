import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { ExploreArticleComponent } from './explore/explore-article/explore-article.component';
import { ExploreUserComponent } from './explore/explore-user/explore-user.component';


const routes: Routes = [
  {
        path: '',
        component: ExploreComponent,
        children: [
          { path: '', redirectTo: 'article', pathMatch: 'full' },
          {
            path: 'article',
            component: ExploreArticleComponent,
          },
          {
            path: 'user',
            component: ExploreUserComponent,
          },
        ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
