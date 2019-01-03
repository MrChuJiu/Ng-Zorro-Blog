import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { DefaultInterceptor } from './core/net/defaultinterceptor';
import { StartupService } from './core/shartup/startup.service';
export function StartupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    SharedModule,
    RoutesModule,
    LayoutModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },{ provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true},
              [
                StartupService,
                {
                  provide: APP_INITIALIZER,
                  useFactory: StartupServiceFactory,
                  deps: [StartupService],
                  multi: true
                }
              ]],
  bootstrap: [AppComponent]
})
export class AppModule { }
