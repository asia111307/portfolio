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
      window.addEventListener('scroll', function() {
          const tree_boxes_left = document.getElementsByClassName('tree-box-inner-left');
          const tree_boxes_left_triangles = document.getElementsByClassName('triangle-left');
          const tree_boxes_right = document.getElementsByClassName('tree-box-inner-right');
          const tree_boxes_right_triangles = document.getElementsByClassName('triangle-right');
          const current_window_width = window.innerWidth;
          if (current_window_width >= 1060) {
              for (let i = 0; i < (tree_boxes_left.length); i++) {
                  if (tree_boxes_left[i].getBoundingClientRect().top < (window.innerHeight * 0.8)) {
                      (<HTMLElement> tree_boxes_left[i]).style.opacity = '1';
                      (<HTMLElement> tree_boxes_left[i]).style.left = '0';
                      (<HTMLElement> tree_boxes_left_triangles[i]).style.opacity = '1';
                  } else {
                      (<HTMLElement> tree_boxes_left[i]).style.opacity = '0';
                      (<HTMLElement> tree_boxes_left[i]).style.left = '-500px';
                      (<HTMLElement> tree_boxes_left_triangles[i]).style.opacity = '0';
                      (<HTMLElement> tree_boxes_left_triangles[i]).style.transitionDelay = 'none';
                  }
              }
              for (let i = 0; i < (tree_boxes_right.length); i++) {
                  if (tree_boxes_right[i].getBoundingClientRect().top < (window.innerHeight * 0.8)) {
                      (<HTMLElement>tree_boxes_right[i]).style.opacity = '1';
                      (<HTMLElement>tree_boxes_right[i]).style.right = '0';
                      (<HTMLElement> tree_boxes_right_triangles[i]).style.opacity = '1';
                  } else {
                      (<HTMLElement>tree_boxes_right[i]).style.opacity = '0';
                      (<HTMLElement>tree_boxes_right[i]).style.right = '-500px';
                      (<HTMLElement> tree_boxes_right_triangles[i]).style.opacity = '0';
                      (<HTMLElement> tree_boxes_right_triangles[i]).style.transitionDelay = 'none';
                  }
              }
          }
      });

  }
}
