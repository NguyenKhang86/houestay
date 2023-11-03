import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadService } from 'src/app/service/load.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit{
  public formChangePass!: FormGroup;
  public isSuccess: boolean = false;
  public isUnsuccess: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private load: LoadService  
  ) { }

  ngOnInit() {
    this.load.loadCss();
    this.load.loadScript();

    this.formChangePass = this.formBuilder.group({
      password: [''],
      newPassword: ['']
    });
  }

  SavePass() {}
}
