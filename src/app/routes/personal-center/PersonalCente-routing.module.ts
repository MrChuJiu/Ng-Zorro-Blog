import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { PersonalMefansComponent } from './personal-center/personal-mefans/personal-mefans.component';
import { PersonalMesettingComponent } from './personal-center/personal-mesetting/personal-mesetting.component';
import { PersonalMefocusComponent } from './personal-center/personal-mefocus/personal-mefocus.component';



const routes: Routes = [
  {
        path: '',
        component: PersonalCenterComponent,
        children: [
          { path: '', redirectTo: 'PersonalMefans', pathMatch: 'full' },
          {
            path: 'PersonalMefans',
            component: PersonalMefansComponent,
          },
          {
            path: 'PersonalMefocus',
            component: PersonalMefocusComponent,
          },
          {
            path: 'PersonalMesetting',
            component: PersonalMesettingComponent,
          },
        ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalCenterRoutingModule { }
