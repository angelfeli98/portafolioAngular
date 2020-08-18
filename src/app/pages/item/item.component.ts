
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Product } from '../../interfaces/local.interface';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html'
})
export class ItemComponent{

    private id: string;
    private product: Product;
    private  date: number;

    constructor(
        private activedRoute: ActivatedRoute,
        private dataService: DataService
    ){
        this.activedRoute.params.subscribe( params => {
            this.id = params.id;
            this.dataService.getProducts(this.id)
                .subscribe( (item: Product) => this.product = item );
          })
        this.date = new Date().getTime();
    }

    public get getItem(): Product{
        return this.product;
    }

    public get getDate(): number{
        return this.date;
    }

    public get getId(): string{
        return this.id;
    }

    public get getImageId(): string{
        const num = this.id.split('-')[1];
        return `assets/img/productos/project-${num}.jpg`;
    }
}