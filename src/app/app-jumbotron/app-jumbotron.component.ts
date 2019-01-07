import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './app-jumbotron.component.html',
  styleUrls: ['./app-jumbotron.component.css']
})
export class AppJumbotronComponent {
    currentLang: string;
    currentPack: any;
    button: string;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; this.setTexts(); } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; this.setTexts(); } );
    }
    setTexts() {
        this.button = this.currentPack[14];
    }
}
