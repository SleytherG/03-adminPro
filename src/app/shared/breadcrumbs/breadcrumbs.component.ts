import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ActivationEnd, Router} from "@angular/router";
import {filter, map, Subscription} from "rxjs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public titulo: string = '';
  public tituloSubs$!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    // console.log( route.snapshot.children[0].data )
   this.tituloSubs$ = this.getArgumentosRuta().subscribe(
     ({ titulo }) => {
       this.titulo = titulo;
       document.title = `AdminPro - ${ titulo }`;
     }
   )
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {
   return  this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd),
        filter( ( event: any) => event.snapshot.firstChild === null),
        map( event => event.snapshot.data )
      )
  }

}
