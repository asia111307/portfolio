import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-app-ux-screen',
  templateUrl: './app-ux-screen.component.html',
  styleUrls: ['./app-ux-screen.component.css']
})
export class AppUxScreenComponent implements OnInit {
    currentLang: string;
    currentPack: any;
    title1: string;
    description1: string;
    button1: string;
    title2: string;
    description2: string;
    button2: string;
    title3: string;
    description3: string;
    button3: string;
    title4: string;
    description4: string;
    button4: string;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; this.setTexts(); } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; this.setTexts(); } );
    }
    setTexts() {
        this.title1 = this.currentPack[37];
        this.description1 = this.currentPack[40];
        this.button1 = this.currentPack[41];
        this.title2 = this.currentPack[37];
        this.description2 = this.currentPack[42];
        this.button2 = this.currentPack[43];
        this.title3 = this.currentPack[38];
        this.description3 = this.currentPack[44];
        this.button3 = this.currentPack[19];
        this.title4 = this.currentPack[39];
        this.description4 = this.currentPack[46];
        this.button4 = this.currentPack[45];
    }

  ngOnInit() {
  }

}
