import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from './change-lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentPack: any;
  constructor(private changeLangService: ChangeLangService) {
       this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; });
  }
  setDefaultLangEmitters() {
        document.getElementsByClassName('lang-switch-to-eng')[0]
            .addEventListener('click', this.changeLangService.changeLangToENG);
        document.getElementsByClassName('lang-switch-to-pl')[0]
            .addEventListener('click', this.changeLangService.changeLangToPL);
  };
  setEventListenerScroll() {
        window.addEventListener('scroll', function () {
            const menu_items_links = document.getElementsByClassName('nav-element-a');
            const menu_height = (<HTMLElement>document.getElementsByClassName('navigation')[0]).offsetHeight;
            const clearMenu= function () {
                for (let i = 0; i < menu_items_links.length; i++) {
                    (<HTMLElement>menu_items_links[i].firstChild).style.color = 'grey';
                }
            };
            clearMenu();
            for (let i = 0; i < menu_items_links.length; i++) {
                const target = document.getElementById(menu_items_links[i].id.split('-')[0]);
                if (target.getBoundingClientRect().top <= (menu_height)) {
                    clearMenu();
                    (<HTMLElement>menu_items_links[i].firstChild).style.color = 'rgb(45, 134, 229)';}
            }
        });
  }

  ngOnInit() {
    this.setDefaultLangEmitters();
    this.setEventListenerScroll();
  }
}

