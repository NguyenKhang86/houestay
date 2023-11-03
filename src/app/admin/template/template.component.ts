import { Component, OnInit } from '@angular/core';
import { khunha, tang, toanha } from 'src/app/model/access.model.service';
import { JsonApiService } from 'src/app/service/json-api.service';
import { LoadService } from 'src/app/service/load.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  providers: [LoadService]
})
export class TemplateComponent implements OnInit{

  username!: string;
  toanha!: toanha[];

  constructor(private load: LoadService, private API: JsonApiService) {}

  ngOnInit(): void {
    this.load.loadCss();
    this.load.loadScript();
    this.username = localStorage.getItem('username') || '';

    this.API.Get('/toanha').subscribe( res => {
      this.toanha = res;
    })
  }
}
