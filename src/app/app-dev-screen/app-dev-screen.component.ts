import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-dev-screen',
  templateUrl: './app-dev-screen.component.html',
  styleUrls: ['./app-dev-screen.component.css']
})
export class AppDevScreenComponent implements OnInit {
    currentLang: string;
    currentPack: any;
    maintitle1: string;
    maintitle2: string;
    description1: string;
    button1: string;
    button2: string;
    description2: string;
    button_old: string;
    description1_old: string;

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
        this.button_old = this.currentPack[47];
        this.description1_old = this.currentPack[48];
    }
    toggleOpen = function() {
        const element = document.getElementsByClassName('view-game')[0];
        (<HTMLElement>element).addEventListener('click', function () {
            (<HTMLElement>this).classList.toggle('open');
            const content = (<HTMLElement>this).nextElementSibling;
            if ((<HTMLElement>this).classList.contains('open')) {
                (<HTMLElement>content).style.display = 'block';
                const clicked = this;
                const opened = document.getElementsByClassName('open');
                for (let k = 0; k < opened.length; k++) {
                    if (opened[k] !== clicked) {
                        (<HTMLElement>opened[k]).click();
                    }
                }
            } else {
                (<HTMLElement>content).style.display = 'none';
            }
        });
    };
    ngOnInit() {
        this.toggleOpen();
    }
}
