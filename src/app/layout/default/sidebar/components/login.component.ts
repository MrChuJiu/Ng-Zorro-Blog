import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
  <nz-card  nzTitle="登录" [nzExtra]="extraTemplate">
  <form nz-form [formGroup]="validateForm" class="login-form" (ngSubmit)="submitForm()">
    <nz-form-item>
      <nz-form-control>
        <nz-input-group [nzPrefix]="prefixUser">
          <input type="text" nz-input formControlName="userName" placeholder="Username">
        </nz-input-group>
        <nz-form-explain *ngIf="validateForm.get('userName').dirty && validateForm.get('userName').errors">Please input your username!</nz-form-explain>
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
    <nz-form-item>
      <nz-form-control>
        <label nz-checkbox formControlName="remember">
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

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
}
