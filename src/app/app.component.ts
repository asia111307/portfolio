import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from './change-lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentLang: string;
  currentPack: any;
  constructor(private changeLangService: ChangeLangService) {
       this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; });
       this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; });
  }
  setDefaultLangEmitters() {
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
    this.setDefaultLangEmitters();
  }
}

