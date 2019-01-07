import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-ux',
  templateUrl: './app-ux.component.html',
  styleUrls: ['./app-ux.component.css']
})
export class AppUxComponent implements OnInit {

    currentLang: string;
    currentPack: any;
    maintitle: string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; this.setTexts(); } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; this.setTexts(); } );
    }
    setTexts() {
        this.maintitle = this.currentPack[35];
        this.title1 = this.currentPack[36];
        this.title2 = this.currentPack[37];
        this.title3 = this.currentPack[38];
        this.title4 = this.currentPack[39];
    }
    showProjectDetails = function() {
        const content = document.getElementsByClassName('example-ux');
        for (let i = 0; i < content.length; i++) {
            (<HTMLElement>content[i]).style.display = 'none';
        }
        const elements = document.getElementsByClassName('ux-tab');
        for (let i = 0; i < elements.length; i++) {
            (<HTMLElement>elements[i]).classList.remove('tab-active');
            (<HTMLElement>elements[i]).addEventListener('click', function () {
                const content2 = document.getElementsByClassName('example-ux');
                for (let j = 0; j < content2.length; j++) {
                    (<HTMLElement>content2[j]).style.display = 'none';
                }
                if ((<HTMLElement>this).classList.contains('tab1')) {
                    (<HTMLElement>document.getElementsByClassName('skrzappek')[0]).style.display = 'block';
                    for (let k = 0; k < elements.length; k++) {
                        (<HTMLElement>elements[k]).classList.remove('tab-active');
                    }
                    (<HTMLElement>this).classList.add('tab-active');
                }
                if ((<HTMLElement>this).classList.contains('tab2')) {
                    (<HTMLElement>document.getElementsByClassName('infokioski')[0]).style.display = 'block';
                    for (let k = 0; k < elements.length; k++) {
                        (<HTMLElement>elements[k]).classList.remove('tab-active');
                    }
                    (<HTMLElement>this).classList.add('tab-active');
                }
                if ((<HTMLElement>this).classList.contains('tab3')) {
                    (<HTMLElement>document.getElementsByClassName('pkp')[0]).style.display = 'block';
                    for (let k = 0; k < elements.length; k++) {
                        (<HTMLElement>elements[k]).classList.remove('tab-active');
                    }
                    (<HTMLElement>this).classList.add('tab-active');
                }
                if ((<HTMLElement>this).classList.contains('tab4')) {
                    (<HTMLElement>document.getElementsByClassName('escape')[0]).style.display = 'block';
                    for (let k = 0; k < elements.length; k++) {
                        (<HTMLElement>elements[k]).classList.remove('tab-active');
                    }
                    (<HTMLElement>this).classList.add('tab-active');
                }
            });
        }
    };
    ngOnInit() {
        this.showProjectDetails();
        (<HTMLElement>document.getElementsByClassName('skrzappek')[0]).style.display = 'block';
        (<HTMLElement>document.getElementsByClassName('ux-tab tab1')[0]).classList.add('tab-active');
    }

}
