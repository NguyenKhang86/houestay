import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoadService } from 'src/app/service/load.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [LoadService]
})
export class SignupComponent implements OnInit{

  public registerForm!: FormGroup;

  constructor(
    private load: LoadService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({})
    this.load.loadBody();
    this.load.loadCss();
    this.load.loadScript();
  }
  onSubmit() {}

}
