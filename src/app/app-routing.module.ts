import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {NopageFoundComponent} from "./nopage-found/nopage-found.component";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NopageFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
