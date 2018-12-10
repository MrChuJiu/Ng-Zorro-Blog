import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { LoginComponent } from './default/sidebar/components/login.component';
import { HotComponent } from './default/sidebar/components/hot.component';
import { ActiveComponent } from './default/sidebar/components/active.component';
import { CategoryComponent } from './default/sidebar/components/category.component';
import { TagsComponent } from './default/sidebar/components/tags.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    HotComponent,
    ActiveComponent,
    CategoryComponent,
    TagsComponent,
  ],
  //非常不明白为啥这里必须 imports RouterModule 要不就是路由错误
  //因为header好像用到了
  imports: [
    SharedModule
  ],
  exports:[
    DefaultComponent,
  ]
})
export class LayoutModule { }
