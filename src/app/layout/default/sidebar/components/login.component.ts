import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingService } from 'src/app/core/shartup/setting.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  template: `
  <nz-card  nzTitle="登录" [nzExtra]="extraTemplate">
  <form nz-form [formGroup]="validateForm" class="login-form" (ngSubmit)="submitForm()">
    <nz-form-item>
      <nz-form-control>
        <nz-input-group [nzPrefix]="prefixUser">
          <input type="text" nz-input formControlName="email" placeholder="email">
        </nz-input-group>
        <nz-form-explain *ngIf="validateForm.get('email').dirty && validateForm.get('email').errors">Please input your email!</nz-form-explain>
      </nz-form-control>
    </nz-form-item>
    <nz-form-item>
      <nz-form-control>
        <nz-input-group [nzPrefix]="prefixLock">
          <input type="password" nz-input formControlName="password" placeholder="Password">
        </nz-input-group>
        <nz-form-explain *ngIf="validateForm.get('password').dirty && validateForm.get('password').errors">Please input your Password!</nz-form-explain>
      </nz-form-control>
    </nz-form-item>
    <nz-alert *ngIf="errorMsg != '' "  nzType="error" [nzMessage]="errorMsg" nzShowIcon></nz-alert>
    <nz-form-item>
      <nz-form-control>
        <label nz-checkbox >
          <span>记住密码</span>
        </label>
        <a class="login-form-forgot" class="login-form-forgot">忘记密码</a>
        <button nz-button class="login-form-button" [nzType]="'primary'">登录</button>
      </nz-form-control>
    </nz-form-item>
  </form>

</nz-card>

<ng-template #extraTemplate>
  <a>注册>></a>
</ng-template>

<ng-template #prefixUser><i nz-icon type="user"></i></ng-template>
<ng-template #prefixLock><i nz-icon type="lock"></i></ng-template>
  `,
  styles  : [
      `
      .login-form-forgot {
        float: right;
      }
      .login-form-button {
        width: 100%;
      }
      `
  ]
})
export class LoginComponent implements OnInit{
  validateForm: FormGroup;
  errorMsg = '';

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    this.errorMsg = '';

    this.http.post("/api/Login",this.validateForm.value).subscribe((data:any) => {
      if (data.code === 200) {
          this.settingService.setToken(`Bearer ${data.data}`);
      } else {
        this.errorMsg = data.Inform;
      }
    });

  }

  constructor(private fb: FormBuilder,private settingService:SettingService,private http:HttpClient) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
    });
  }
}
