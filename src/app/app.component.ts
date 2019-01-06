import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from './change-lang.service';
import {STRINGS_ENG} from '../strings_ENG';
import {STRINGS_PL} from '../strings_PL';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mill';
  constructor(private changeLangService: ChangeLangService) {}
  setDefaultLang() {
      /* window.onload = function() {
          const elementsENG = document.getElementsByClassName('lang-eng');
          const elementsPL = document.getElementsByClassName('lang-pl');
          for (let i = 0; i < elementsENG.length; i++) {
              (<HTMLElement>elementsENG[i]).style.display = 'none';
          }
          for (let i = 0; i < elementsPL.length; i++) {
              (<HTMLElement>elementsPL[i]).style.display = 'block';
          }
      }; */
        const elementENG = document.getElementsByClassName('lang-switch-to-eng');
        const elementPL = document.getElementsByClassName('lang-switch-to-pl');
        for (let i = 0; i < elementENG.length; i++) {
            (<HTMLElement>elementENG[i]).addEventListener('click', this.changeLangService.changeLangToENG);
        }
        for (let i = 0; i < elementPL.length; i++) {
          (<HTMLElement>elementPL[i]).addEventListener('click', this.changeLangService.changeLangToPL);
        }
  };
  ngOnInit() {
    this.setDefaultLang();
  }
}

