import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    stylesUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}
