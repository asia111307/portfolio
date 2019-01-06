import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './app-experience.component.html',
  styleUrls: ['./app-experience.component.css']
})
export class AppExperienceComponent implements OnInit {
  toggleOpen = function() {
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
  };
  ngOnInit() {
      this.toggleOpen();
  }
}
