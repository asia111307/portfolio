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
    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; } );
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

