import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    private activatedRoute = inject(ActivatedRoute);

    constructor() {
        console.log(this.activatedRoute);
    }
}
