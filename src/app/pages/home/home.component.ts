
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ProInd } from '../../interfaces/local.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.components.css']
})
export class HomeComponent{

    private products: ProInd[];
    private loading: boolean;

    constructor(
        private dataService: DataService
    ){
        this.loading = true;
        this.dataService.getProductIndex.subscribe( products => {
            this.products = products
            this.loading = false;
        })
    }

    public get getProducts(): ProInd[]{
        return this.products;
    }

    public get getLoading(): boolean{
        return this.loading;
    }
}