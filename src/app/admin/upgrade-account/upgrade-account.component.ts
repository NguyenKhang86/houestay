import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade-account.component.html',
  styleUrls: ['./upgrade-account.component.css']
})
export class UpgradeAccountComponent implements OnInit{
  selectedOption: string = 'monthly';
  constructor() { }
  ngOnInit(): void {
  }

}
