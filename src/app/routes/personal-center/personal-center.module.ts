import { NgModule } from '@angular/core';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { PersonalMefocusComponent } from './personal-center/personal-mefocus/personal-mefocus.component';
import { PersonalMesettingComponent } from './personal-center/personal-mesetting/personal-mesetting.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalCenterRoutingModule } from './PersonalCente-routing.module';
import { PersonalMefansComponent } from './personal-center/personal-mefans/personal-mefans.component';
@NgModule({
  declarations: [PersonalCenterComponent, PersonalMefocusComponent, PersonalMesettingComponent,PersonalMefansComponent],
  imports: [
     SharedModule,
     PersonalCenterRoutingModule
  ]
})
export class PersonalCenterModule { }
