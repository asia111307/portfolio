import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from '../../change-lang.service';

@Component({
  selector: 'app-app-ux-screen',
  templateUrl: './app-ux-screen.component.html',
  styleUrls: ['./app-ux-screen.component.css']
})
export class AppUxScreenComponent implements OnInit {
    currentLang: string;
    currentPack: any;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => {
            this.currentLang = newLang;
        });
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => {
            this.currentPack = newPack;
        });
    }

    toggleOpen() {
        const element = document.getElementsByClassName('info-button')[0];
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
  }

}
