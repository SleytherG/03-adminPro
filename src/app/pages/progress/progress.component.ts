import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  progreso1: number = 25;
  progreso2: number = 35;
  btnClass1: string = 'btn-success';
  btnClass2: string = 'btn-info';

  get getProgreso1() {
    return `${this.progreso1 + '%'}`;
  }

  get getProgreso2() {
    return `${this.progreso2 + '%'}`;
  }

    ngOnInit(): void {

    }

    cambioValorHijo1( valor: number ) {
        this.progreso1 = valor;
    }

    cambioValorHijo2( valor: number ) {
    this.progreso2 = valor;
    }

}
