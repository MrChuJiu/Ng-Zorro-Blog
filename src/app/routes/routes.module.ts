import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteRoutingModule } from './routes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PublishArticleComponent } from './publish-article/publish-article.component';

@NgModule({
  declarations: [DashboardComponent, PublishArticleComponent],
  imports: [
    SharedModule,
    RouteRoutingModule,
  ]

})
export class RoutesModule { }
