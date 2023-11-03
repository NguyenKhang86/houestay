import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  fullname!: string; address!: string; phone!: string; email: string = '';
  formPutProfile!: FormGroup;

  constructor (private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.formPutProfile = this.formBuilder.group({
      id: Number,
      fullname: [''],
      address: [''],
      phone: [''],
      email: ['']
    }); 
  }
  getDataForm() {}
}

