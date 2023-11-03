import { Component } from '@angular/core';
import { toanha } from 'src/app/model/access.model.service';
import { JsonApiService } from 'src/app/service/json-api.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {
  toanha!: toanha[];
  constructor(private api: JsonApiService) {}
  ngOnInit(): void {
    this.api.Get('/toanha').subscribe( res => {
      this.toanha = res;
    })
  }
  Add() {}
  Delete() {}
}
