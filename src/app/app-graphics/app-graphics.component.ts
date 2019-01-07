import {Component} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './app-graphics.component.html',
  styleUrls: ['./app-graphics.component.css']
})
export class AppGraphicsComponent {
    currentLang: string;
    currentPack: any;
    title: string;
    description: string;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; this.setTexts(); } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; this.setTexts(); } );
    }
    setTexts() {
        this.title = this.currentPack[12];
        this.description = this.currentPack[13];
    }
}
