import {Component, Input, OnInit} from '@angular/core';
import {Color, MultiDataSet} from "ng2-charts";

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent implements OnInit {
  @Input() doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input() doughnutChartData: MultiDataSet = [
    [ 350, 450, 100 ],
  ];

  @Input() colors: Color[] = [
    {backgroundColor: [ '#9E120E', '#FF5800', '#FFB414' ]}
  ]
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
