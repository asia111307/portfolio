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
  constructor(private changeLangService: ChangeLangService) {
      this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; } );
      this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; } );
  }
}
