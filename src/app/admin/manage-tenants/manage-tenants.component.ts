import { khachhang, phong, toanha } from './../../model/access.model.service';
import { Component, OnInit } from '@angular/core';
import { ApidataService } from 'src/app/service/apidata.service';
import { JsonApiService } from 'src/app/service/json-api.service';

@Component({
  selector: 'app-manage-tenants',
  templateUrl: './manage-tenants.component.html',
  styleUrls: ['./manage-tenants.component.css'],
  providers: [ApidataService]
})
export class ManageTenantsComponent implements OnInit{

  fullname!: string; address!: string; phone!: string; email: string = '';
  name!: string[];
  khachhang!: khachhang[];

  toanha!: toanha[];
  phong!: phong[];
  constructor(private api: JsonApiService, private ever: ApidataService) {}
  ngOnInit(): void {
    this.api.Get('/phong').subscribe( res => {
      this.phong = res;
    })
    this.api.Get('/phong').subscribe( res => {
      this.toanha = res;
    })
    // this.ever.GetApi(`Customer/Find?keyword=${this.name}`).subscribe( res => {
      //     this.khachhang = res;
      //   })
  }

  Delete() {}
  getDataForm() {
}
}

