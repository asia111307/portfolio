import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-dev-screen',
  templateUrl: './app-dev-screen.component.html',
  styleUrls: ['./app-dev-screen.component.css']
})
export class AppDevScreenComponent {
    currentLang: string;
    currentPack: any;
    maintitle1: string;
    maintitle2: string;
    description1: string;
    button1: string;
    description2: string;
    button2: string;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; this.setTexts(); } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; this.setTexts(); } );
    }
    setTexts() {
        this.maintitle1 = this.currentPack[3];
        this.maintitle2 = this.currentPack[4];
        this.description1 = this.currentPack[5];
        this.button1 = this.currentPack[6];
        this.description2 = this.currentPack[7];
        this.button2 = this.currentPack[8];
    }
}
