import { Component } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import {ButtonModule} from 'primeng/button'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
})


export class AppComponent {
  title = 'superquiz';
  constructor(private primeng: PrimeNG) {}

    ngOnInit() {
        this.primeng.ripple.set(true);
    }
}
