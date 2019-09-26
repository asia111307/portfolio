import {Component, OnInit} from '@angular/core';
import {ChangeLangService} from '../change-lang.service';

@Component({
  selector: 'app-experience',
  templateUrl: './app-experience.component.html',
  styleUrls: ['./app-experience.component.css']
})
export class AppExperienceComponent implements OnInit {
    currentLang: string;
    currentPack: any;
    constructor(private changeLangService: ChangeLangService) {
        this.changeLangService.currentLanguage$.subscribe((newLang: string) => { this.currentLang = newLang; } );
        this.changeLangService.currentLanguagePack$.subscribe((newPack: any) => { this.currentPack = newPack; } );
    }
  toggleOpen() {
      const elements = document.getElementsByClassName('view-cv');
      for (let i = 0; i < elements.length; i++) {
          (<HTMLElement>elements[i]).addEventListener('click', function () {
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
      }
  }
  ngOnInit() {
      this.toggleOpen();
      const tree_boxes = document.getElementsByClassName('tree-box-inner');
      console.log(tree_boxes);
      for (let i = 0; i < tree_boxes.length; i++) {
          tree_boxes[i].addEventListener('scroll', function() {
              const treeBoxTop = tree_boxes[i].getBoundingClientRect().top - document.body.getBoundingClientRect().top;
              console.log(treeBoxTop);
              if (treeBoxTop - document.documentElement.scrollTop <= 100 ) {
                  tree_boxes[i].classList.add('show');
                  console.log('class added');
              } else {
                  tree_boxes[i].classList.remove('show');
                  console.log('class taken');
              }
          });
      }
  }
}
