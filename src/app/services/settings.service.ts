import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linktheme = document.querySelector("#theme");

  public links!: NodeListOf<Element>;


  constructor() {

    const themeLocalStorage = localStorage.getItem('theme') || `./assets/css/colors/purple-dark.css`;
    if ( this.linktheme ) {
      this.linktheme.setAttribute('href', themeLocalStorage );
    }
  }

  changeTheme( theme: string ) {
    const url = `./assets/css/colors/${ theme }.css`;
    if ( this.linktheme ) {
      this.linktheme.setAttribute('href', url);
      localStorage.setItem('theme', url );
    }

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {

    const links = document.querySelectorAll(".selector");

    links.forEach( (elem: any) => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      if ( this.linktheme ) {
        const currentTheme = this.linktheme.getAttribute('href');

        if ( btnThemeUrl === currentTheme ) {
          elem.classList.add('working');
        }
      }
    })
  }


}
