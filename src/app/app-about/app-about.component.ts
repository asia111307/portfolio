import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-about',
  templateUrl: './app-about.component.html',
  styleUrls: ['./app-about.component.css']
})
export class AppAboutComponent {
  currentLang: string;
  currentPack: any;
  header: string;
  description: string;
  constructor(private changeLangService: ChangeLangService) {
      this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; this.setTexts(); } );
      this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; this.setTexts(); } );
  }
  setTexts() {
      this.header = this.currentPack[0];
      this.description = this.currentPack[1];
  }
}
