import { Component } from '@angular/core';
import {Color, MultiDataSet} from "ng2-charts";

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.scss']
})
export class Grafica1Component {

  title1: string = 'Sales 21th Century'
  title2: string = 'Sales 22th Century'
  title3: string = 'Sales 23th Century'
  title4: string = 'Sales 24th Century'

  labels1: string[] = [ 'Sales 2010', 'Sales 2011', 'Sales 2012' ];
  labels2: string[] = [ 'Sales 2110', 'Sales 2121', 'Sales 2122' ];
  labels3: string[] = [ 'Sales 2230', 'Sales 2231', 'Sales 2232' ];
  labels4: string[] = [ 'Sales 2340', 'Sales 2341', 'Sales 2342' ];
  data1: MultiDataSet = [
      [ 120, 250, 400 ],
  ];
  data2: MultiDataSet = [
    [ 150, 280, 450 ],
  ];
  data3: MultiDataSet = [
    [ 180, 300, 500 ],
  ];
  data4: MultiDataSet = [
    [ 200, 350, 550 ],
  ];


  colors1: Color[] = [
    {backgroundColor: [ 'black', 'red', 'green' ]}
  ]
  colors2: Color[] = [
    {backgroundColor: [ 'yellow', 'blue', 'light-blue' ]}
  ]
  colors3: Color[] = [
    {backgroundColor: [ 'light-red', 'orange', 'purple' ]}
  ]
  colors4: Color[] = [
    {backgroundColor: [ 'dark-red', 'gray', 'pink' ]}
  ]


}
