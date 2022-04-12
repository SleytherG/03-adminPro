import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => console.log( usuarios ));
    // const promesa = new Promise( ( resolve, reject ) => {
    //
    //   if ( false ) {
    //     resolve('Hola Mundo');
    //   } else {
    //     reject('Algo salio mal.');
    //   }
    //
    //
    // });
    //
    // promesa.then(( resolve ) => {
    //   console.log('Hey Termine', resolve );
    // }).catch( err => {
    //   console.log(err)
    // });
    //
    // console.log('Fin del Init');

  }

  getUsuarios() {

    return new Promise( (resolve, reject) => {
        resolve( fetch('https://reqres.in/api/users')
          .then( resp => resp.json() )
          .then( body => body.data ) )
    });
  }

}
