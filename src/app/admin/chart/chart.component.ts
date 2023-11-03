import { Component, OnInit } from '@angular/core';
import { phong } from 'src/app/model/access.model.service';
import { JsonApiService } from 'src/app/service/json-api.service';
import { LoadService } from 'src/app/service/load.service';
import { Chart,registerables} from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit{
  phong!: phong[];
  seles!: any;
  year: any[] = []; amount1 :any[] = []; amount2 :any[] = []; backgroundColor: any[] = [];
  
  constructor(private load: LoadService, private api: JsonApiService) {}
  
  ngOnInit(): void {
    this.barchart(this.year, this.amount1,this.amount2);
    this.piechart();
    // this.load.loadCss();
    // this.load.loadScript();

    this.api.Get('/phong').subscribe( res => {
      this.phong = res;
    })
    this.api.Get('/seles').subscribe( res => {
      this.seles = res;
      if (this.seles != null) {
        for (let i = 0; i < this.seles.length; i++) {
          this.year.push(this.seles[i].year);
          this.amount1.push(this.seles[i].amount1);
          this.amount2.push(this.seles[i].amount2);
        }
      }
    })
  }
  barchart(year:any,amount1:any,amount2:any) {
    const myChart = new Chart('barchart', {
        type: 'bar',
        data: {
            labels: year,
            datasets: [{
              data: amount1,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
              ],
              label: 'Còn Trống',
            },
            {
              data: amount2,
              backgroundColor: [
                'rgba(255, 99, 62, 0.6)',
              ],
              label: 'Lấp Đầy',
            }
          ]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
  }
  piechart() {
    const myChart = new Chart('piechart', {
        type: 'pie',
        data: {
            labels: ['Còn Trống', 'Lấp Đầy'],
            datasets: [{
                data: ['800','200'],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(255, 99, 62, 0.6)',
                ],
            }
          ]
        },
    });
  }
  Add() {}
  Delete() {}
}
