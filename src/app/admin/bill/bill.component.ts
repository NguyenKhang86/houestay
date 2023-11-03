import { Component } from '@angular/core';
import { dichvu, hoadon, toanha } from 'src/app/model/access.model.service';
import { JsonApiService } from 'src/app/service/json-api.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  dichvu!: dichvu[];
  toanha!: toanha[];
  hoadon!: hoadon[];
  constructor(private api: JsonApiService) {}
  ngOnInit(): void {
    this.api.Get('/hoadon').subscribe( res => {
      this.hoadon = res;
    })
  }
  Add() {}
  Delete() {}
}
