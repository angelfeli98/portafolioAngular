
import { Component } from '@angular/core';
import { Product, ProInd } from '../../interfaces/local.interface';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent{

    private products: ProInd[];
    private loading: boolean;

    constructor(
        private dataService: DataService,
        private activedRoute: ActivatedRoute
    ){
        this.loading = true;
        this.products = [];
        this.activedRoute.params.subscribe( params => {
            const name = params.name;
            this.dataService.getItemByName(name)
                            .subscribe( (data: ProInd[]) => {
                                this.products = data;
                                this.loading = false;
                            })
        })
    }

    public get getProducts(): ProInd[]{
        return this.products;
    }

    public get getLoading(): boolean{
        return this.loading;
    }
}