import { Component, OnInit } from '@angular/core';
import { phong } from 'src/app/model/access.model.service';
import { JsonApiService } from 'src/app/service/json-api.service';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit{

  phong!: phong[];
  constructor(private api: JsonApiService) {}
  ngOnInit(): void {
    this.api.Get('/phong').subscribe( res => {
      this.phong = res;
    })
  }

  Delete() {}
}
