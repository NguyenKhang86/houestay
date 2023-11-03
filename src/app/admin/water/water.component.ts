import { Component } from '@angular/core';
import { dichvu, phong } from 'src/app/model/access.model.service';
import { JsonApiService } from 'src/app/service/json-api.service';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent {
  phong!: phong[];
  dichvu!: dichvu[];
  constructor(private api: JsonApiService) {}
  ngOnInit(): void {
    this.api.Get('/dichvu').subscribe( res => {
      this.dichvu = res;
    })
  }

  Add() {}
  Delete() {}
}
