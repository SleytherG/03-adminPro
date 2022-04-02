import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 40;
  @Input() btnClass: string = 'btn-primary'

  @Output() valorSalida: EventEmitter<number> = new EventEmitter<number>();

  progressForm: FormGroup = this.fb.group({
    progreso: [ '' ]
  });

  get getProgress() {
    return `${ this.progreso + '%' }`;
  }
  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.progressForm.get('progreso')?.setValue( this.progreso );
    this.btnClass = `btn ${ this.btnClass }`;
  }

  cambiarValor( valor: number ) {
    if ( this.progreso >= 100 && valor >= 0 ) {
      this.valorSalida.emit(100);
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.valorSalida.emit(0);
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.valorSalida.emit( this.progreso );
  }

  cambiarProgreso( nuevoValor: number ) {

    if ( nuevoValor >= 100 ) {
      this.progreso = 100;
    } else if ( nuevoValor <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit( nuevoValor );
    console.log( this.progreso );
  }

}
