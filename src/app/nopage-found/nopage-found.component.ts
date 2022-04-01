import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopage-found',
  templateUrl: './nopage-found.component.html',
  styleUrls: ['./nopage-found.component.scss']
})
export class NopageFoundComponent {

  year = new Date().getFullYear();

}
