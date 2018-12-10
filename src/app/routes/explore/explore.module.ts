import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore/explore.component';
import { ExploreArticleComponent } from './explore/explore-article/explore-article.component';
import { ExploreUserComponent } from './explore/explore-user/explore-user.component';



@NgModule({
  imports: [
    SharedModule,
    ExploreRoutingModule
  ],
  declarations: [
    ExploreComponent,
    ExploreArticleComponent,
    ExploreUserComponent,
  ]
})
export class ExploreModule { }
