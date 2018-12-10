import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from 'src/environments/environment';
import { DefaultComponent } from '../layout/default/default.component';
import { PublishArticleComponent } from './publish-article/publish-article.component';



const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'explore', loadChildren: './explore/explore.module#ExploreModule' },
      { path: 'article', loadChildren: './article/article.module#ArticleModule' },
      { path: 'publisharticle', component: PublishArticleComponent },
      { path: 'personalcenter', loadChildren: './personal-center/personal-center.module#PersonalCenterModule' },
      // { path: 'system', loadChildren: './system/system.module#SystemModule' },
    ]
  },
  // {
  //   path: 'passport',
  //   component: LayoutPassportComponent,
  //   children: [
  //     { path: 'login', component: UserLoginComponent, data: { title: '登录' } },
  //     { path: 'register', component: UserRegisterComponent, data: { title: '注册' } },
  //     { path: 'register-result', component: UserRegisterResultComponent, data: { title: '注册结果' } }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
