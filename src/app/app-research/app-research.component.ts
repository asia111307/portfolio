import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-research',
  templateUrl: './app-research.component.html',
  styleUrls: ['./app-research.component.css']
})
export class AppResearchComponent {
    currentLang: string;
    currentPack: any;
    title1: string;
    description1: string;
    title2: string;
    description2: string;
    title3: string;
    description3: string;
    title4: string;
    description4: string;
    button: string;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; this.setTexts(); } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; this.setTexts(); } );
    }
    setTexts() {
        this.title1 = this.currentPack[17];
        this.description1 = this.currentPack[18];
        this.title2 = this.currentPack[20];
        this.description2 = this.currentPack[21];
        this.title3 = this.currentPack[22];
        this.description3 = this.currentPack[23];
        this.title4 = this.currentPack[24];
        this.description4 = this.currentPack[25];
        this.button = this.currentPack[19];
    }
}
