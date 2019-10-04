import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from './change-lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentPack: any;
  constructor(private changeLangService: ChangeLangService) {
       this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; });
  }
  setDefaultLangEmitters() {
        const elementENG = document.getElementsByClassName('lang-switch-to-eng')[0]
            .addEventListener('click', this.changeLangService.changeLangToENG);
        const elementPL = document.getElementsByClassName('lang-switch-to-pl')[0]
            .addEventListener('click', this.changeLangService.changeLangToPL);
  };
  ngOnInit() {
    this.setDefaultLangEmitters();
  }
}

