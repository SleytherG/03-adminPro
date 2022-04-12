import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, interval, map, Observable, retry, Subscription, take} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    this.intervalSubs =  this.retornaIntervalo()
      .subscribe(
      ( valor ) => console.log( valor )
    );

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe({
    //   next: ( valor ) => console.log('Subs: ', valor ),
    //   error: ( error ) => console.warn('Error', error ),
    //   complete: () => console.log('OBS terminado')
    // });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {

    return interval(100)
            .pipe(
              map( valor => valor + 1),
              filter( valor => valor % 2 === 0),
              take(10)
            );

  }

  retornaObservable(): Observable<number> {

    let i = -1;

    const obs$ = new Observable<number>( (observer) => {


      const intervalo = setInterval( () => {
        i++;
        observer.next(i);

        if ( i === 4 ) {
          clearInterval( intervalo );
          observer.complete();
        }
        if ( i === 2 ) {
          observer.error('i llego al valor de 2');
        }

      }, 1000);

    });

    return obs$;

  }

}
