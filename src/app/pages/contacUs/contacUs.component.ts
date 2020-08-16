
import { Component } from '@angular/core';
import { LocalService } from '../../services/loca.service';

@Component({
    selector: 'app-contacUs',
    templateUrl: './contactUs.component.html',
    styleUrls: ['./contactUs.component.css']
})
export class ContactUsComponent{

    constructor(
        private localService: LocalService
    ){
    }
}