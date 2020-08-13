
import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent{

    private year: number;

    constructor(){
        this.year = new Date().getFullYear();
    }

    public get getYear(): number{
        return this.year;
    }
}