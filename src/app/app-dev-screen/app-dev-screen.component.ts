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
    button_p1: string;
    button_p2: string;
    button_p3: string;
    button_p4: string;
    button_p5: string;
    button_p6: string;
    button_p7: string;
    button_p8: string;
    ter_description: string;
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
        this.button_p1 = this.currentPack[49];
        this.button_p2 = this.currentPack[50];
        this.button_p3 = this.currentPack[51];
        this.button_p4 = this.currentPack[52];
        this.button_p5 = this.currentPack[53];
        this.button_p6 = this.currentPack[54];
        this.button_p7 = this.currentPack[55];
        this.button_p8 = this.currentPack[56];
        this.ter_description = '';
    }
    toggleOpen() {
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
    toggleOpenPrograms() {
        const elements = document.getElementsByClassName('view-game-p');
        for (let i = 0; i < elements.length; i++) {
            (<HTMLElement>elements[i]).addEventListener('click', function () {
                (<HTMLElement>this).classList.add('open');
                const content = document.getElementsByClassName('view-game-programs')[0];
                if ((<HTMLElement>this).classList.contains('open')) {
                    if ((<HTMLElement>this).classList.contains('p1')) {
                        (<HTMLIFrameElement>document.getElementById('programs_ter')).src = 'https://repl.it/@asia111307/trzylatek?lite=true&outputonly=1';
                    } else if ((<HTMLElement>this).classList.contains('p2')) {
                        (<HTMLIFrameElement>document.getElementById('programs_ter')).src = 'https://repl.it/@asia111307/anagram?lite=true&outputonly=1';
                    } else if ((<HTMLElement>this).classList.contains('p3')) {
                        (<HTMLIFrameElement>document.getElementById('programs_ter')).src = 'https://repl.it/@asia111307/zgadywanie-liczby?lite=true&outputonly=1';
                    } else if ((<HTMLElement>this).classList.contains('p4')) {
                        (<HTMLIFrameElement>document.getElementById('programs_ter')).src = 'https://repl.it/@asia111307/zgadywanie-liczby-przez-komputer?lite=true&outputonly=1';
                    } else if ((<HTMLElement>this).classList.contains('p5')) {
                        (<HTMLIFrameElement>document.getElementById('programs_ter')).src = 'https://repl.it/@asia111307/kolko-i-krzyzyk?lite=true&outputonly=1';
                    } else if ((<HTMLElement>this).classList.contains('p6')) {
                        (<HTMLIFrameElement>document.getElementById('programs_ter')).src = 'https://repl.it/@asia111307/wisielec?lite=true&outputonly=1';
                    } else if ((<HTMLElement>this).classList.contains('p7')) {
                        (<HTMLIFrameElement>document.getElementById('programs_ter')).src = 'https://repl.it/@asia111307/wojna-jednokartowa?lite=true&outputonly=1';
                    } else if ((<HTMLElement>this).classList.contains('p8')) {
                        (<HTMLIFrameElement>document.getElementById('programs_ter')).src = 'https://repl.it/@asia111307/wojna-normalna?lite=true&outputonly=1';
                    }
                    (<HTMLElement>content).style.display = 'block';
                } else {
                    (<HTMLElement>content).style.display = 'none';
                }
            });
        }

    };
    ngOnInit() {
        this.toggleOpen();
        this.toggleOpenPrograms();
    }
}

