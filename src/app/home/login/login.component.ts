import { ApidataService } from './../../service/apidata.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadService } from 'src/app/service/load.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoadService,ApidataService]
})
export class LoginComponent implements OnInit{
  public loginF!:FormGroup;
  constructor(
    private ever: ApidataService,
    private load: LoadService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginF = this.formBuilder.group({
      username: [''],
      password: ['']
    })

    this.load.loadBody();
    this.load.loadCss();
    this.load.loadScript();  
  }
  onSubmit() {
    this.ever.postApi('login', this.loginF.value).subscribe( res => {
      if (res.status == false) {
        alert('Tài khoản hoặc mật khẩu sai, xin vui lòng thử lại !')
      } else {
        this.ever.setCookie(ApidataService.CookieName,res.data,30,"/");
        localStorage.setItem('username', this.loginF.value.username);
        window.location.href = 'admin';
      }
    })
  }
}
