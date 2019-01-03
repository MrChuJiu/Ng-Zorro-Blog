import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SettingService } from './setting.service';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {

  constructor(private httpClient: HttpClient,private settingService:SettingService) { }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {

       //正式
       this.httpClient.get('/api/Login')
         .pipe(
            catchError((res: any) => {
             resolve(null);
             return null;
           }),
         )
         .subscribe(
           (res: any) => {
             // 用户信息：包括姓名、头像、邮箱地址
             this.settingService.setUser(res.data);

           },
           () => {},
           () => {
             resolve(null);
           },
         );
    });
  }
}
