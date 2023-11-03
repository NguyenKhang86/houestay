import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { khunha, phong, tang, toanha } from 'src/app/model/access.model.service';
import { JsonApiService } from 'src/app/service/json-api.service';

@Component({
  selector: 'app-roomview',
  templateUrl: './roomview.component.html',
  styleUrls: ['./roomview.component.css']
})
export class RoomviewComponent implements OnInit{
  fullname!: string; address!: string; phone!: string; email: string = '';
  toanha!: toanha[];
  khunha!: khunha[]; 
  tang!: tang[]; 
  phong!: phong[];
  id!: number;
  constructor(private API: JsonApiService) {}

  producrtFormToanha: FormGroup = new FormGroup({
    toanha: new FormControl(),
    diachi: new FormControl(),
    quanly: new FormControl()
  })
  themtoanha() {
    // this.API.Post('/toanha', this.producrtFormToanha.value).subscribe( res => {
    //   console.log(res);
    // })
  }
  DeleteHouse() {}

  producrtFormKhunha: FormGroup = new FormGroup({
    khunha: new FormControl()
  })

  producrtFormTang: FormGroup = new FormGroup({
    sotang: new FormControl()
  })

  producrtFormPhong: FormGroup = new FormGroup({
    sophong: new FormControl(),
    sophhientrangong: new FormControl(),
    name1: new FormControl(),
    name2: new FormControl(),
    dientich: new FormControl(),
    tienphong: new FormControl(),
  })
  
  themthongtinphong() {
    console.log(this.producrtFormPhong.value);
    // this.API.Post('phong', this.producrtFormPhong.value).subscribe( res => {
    //   console.log(res);
    // })
  }
  suathongtinphong() {}

  ngOnInit(): void {
   
      // this.producrtFormToanha = new FormGroup({
      //   toanha: new FormControl(res.toanha),
      //   diachi: new FormControl(),
      //   quanly: new FormControl()
      // })
    // })
    this.API.Get('/khunha').subscribe( res => {
      this.khunha = res;
    })
    this.API.Get('/tang').subscribe( res => {
      // this.tang = res;
      console.log(res.id);

    })
    this.API.Get('/phong').subscribe( res => {
      this.phong = res;
    })
  }

  suathongtincanhan() {}

  DeleteRoom(){
  }

  themtoa() {}
  suatoa() {}
  timkiem() {}
  Add() {}
  Delete() {}
}
