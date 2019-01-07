import { Component, OnInit } from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-others',
  templateUrl: './app-others.component.html',
  styleUrls: ['./app-others.component.css']
})
export class AppOthersComponent implements OnInit {
    currentLang: string;
    currentPack: any;
    maintitle: string;
    title1: string;
    title2: string;

    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; this.setTexts(); } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; this.setTexts(); } );
    }
    setTexts() {
        this.maintitle = this.currentPack[15];
        this.title1 = this.currentPack[12];
        this.title2 = this.currentPack[16];
    }
    showProjectDetails = function() {
        const content = document.getElementsByClassName('example-others');
        for (let i = 0; i < content.length; i++) {
            (<HTMLElement>content[i]).style.display = 'none';
        }
        const elements = document.getElementsByClassName('others-tab');
        for (let i = 0; i < elements.length; i++) {
            (<HTMLElement>elements[i]).classList.remove('tab-active');
            (<HTMLElement>elements[i]).addEventListener('click', function () {
                const content2 = document.getElementsByClassName('example-others');
                for (let j = 0; j < content2.length; j++) {
                    (<HTMLElement>content2[j]).style.display = 'none';
                }
                if ((<HTMLElement>this).classList.contains('tab1')) {
                    (<HTMLElement>document.getElementsByClassName('grafika')[0]).style.display = 'block';
                    for (let k = 0; k < elements.length; k++) {
                        (<HTMLElement>elements[k]).classList.remove('tab-active');
                    }
                    (<HTMLElement>this).classList.add('tab-active');
                }
                if ((<HTMLElement>this).classList.contains('tab2')) {
                    (<HTMLElement>document.getElementsByClassName('badania')[0]).style.display = 'block';
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
        (<HTMLElement>document.getElementsByClassName('grafika')[0]).style.display = 'block';
        (<HTMLElement>document.getElementsByClassName('others-tab tab1')[0]).classList.add('tab-active');
    }

}
