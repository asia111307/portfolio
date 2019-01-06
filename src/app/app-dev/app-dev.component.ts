import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './app-dev.component.html',
  styleUrls: ['./app-dev.component.css']
})
export class AppDevComponent implements OnInit {

    showProjectDetails = function() {
        const content = document.getElementsByClassName('example-dev');
        for (let i = 0; i < content.length; i++) {
            (<HTMLElement>content[i]).style.display = 'none';
        }
        const elements = document.getElementsByClassName('dev-tab');
        for (let i = 0; i < elements.length; i++) {
            (<HTMLElement>elements[i]).classList.remove('tab-active');
            (<HTMLElement>elements[i]).addEventListener('click', function () {
                const content2 = document.getElementsByClassName('example-dev');
                for (let j = 0; j < content2.length; j++) {
                    (<HTMLElement>content2[j]).style.display = 'none';
                }
                if ((<HTMLElement>this).classList.contains('tab1')) {
                    (<HTMLElement>document.getElementsByClassName('milionerzy')[0]).style.display = 'block';
                    for (let k = 0; k < elements.length; k++) {
                        (<HTMLElement>elements[k]).classList.remove('tab-active');
                    }
                    (<HTMLElement>this).classList.add('tab-active');
                }
                if ((<HTMLElement>this).classList.contains('tab2')) {
                    (<HTMLElement>document.getElementsByClassName('programy')[0]).style.display = 'block';
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
        (<HTMLElement>document.getElementsByClassName('milionerzy')[0]).style.display = 'block';
        (<HTMLElement>document.getElementsByClassName('dev-tab tab1')[0]).classList.add('tab-active');
    }

}
