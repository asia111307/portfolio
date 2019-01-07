import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './app-top-nav.component.html',
  styleUrls: ['./app-top-nav.component.css']
})
export class AppTopNavComponent {
    currentLang: string;
    currentPack: any;
    aboutme: string;
    projects: string;
    ux: string;
    dev: string;
    others: string;
    contact: string;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; this.setTexts(); } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; this.setTexts(); } );
    }
    setTexts() {
        this.aboutme = this.currentPack[30];
        this.projects = this.currentPack[31];
        this.ux = this.currentPack[32];
        this.dev = this.currentPack[33];
        this.others = this.currentPack[15];
        this.contact = this.currentPack[34];
    }
  changeLangToENG() {
      this.changeLangService.changeLangToENG();
  }
  changeLangToPL() {
      this.changeLangService.changeLangToPL();
  }

}
