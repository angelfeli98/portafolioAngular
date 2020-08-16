
import { Component } from '@angular/core';
import { Local } from '../../../interfaces/local.interface';
import { LocalService } from '../../../services/loca.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent{

    private year: number;
    private local: Local;

    constructor(
        private localService: LocalService
    ){
        this.year = new Date().getFullYear();
        this.localService.getLocal.subscribe( local => this.local = local );
    }

    public get getYear(): number{
        return this.year;
    }

    public get getLocal(): Local{
        return this.local;
    }
}