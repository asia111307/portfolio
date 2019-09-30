import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent {
  currentLang: string;
  currentPack: any;

  constructor(private changeLangService: ChangeLangService) {
    this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; } );
    this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; } );
  }
}
