import {  khunha, tang } from './../../model/access.model.service';
import { Component, OnInit } from '@angular/core';
import { JsonApiService } from 'src/app/service/json-api.service';

@Component({
  selector: 'app-roominfo',
  templateUrl: './roominfo.component.html',
  styleUrls: ['./roominfo.component.css'],
})
export class RoominfoComponent implements OnInit{
  khunha!: khunha[]; tang!: tang[]; 
  constructor(private API: JsonApiService) {}
  ngOnInit(): void {
  }



  themtoa() {}
  suatoa() {}
  timkiem() {}
  Add() {}
  Delete() {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imagePreview = document.querySelector('.image-preview');
        if (imagePreview) {
          imagePreview.setAttribute('src', e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
