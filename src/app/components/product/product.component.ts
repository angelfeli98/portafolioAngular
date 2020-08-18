import { Component, OnInit, Input } from '@angular/core';
import { Product, ProInd } from '../../interfaces/local.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() private product: ProInd;

  constructor() { }

  ngOnInit(): void {
  }

  public get getProduct(): ProInd{
    return this.product;
  }
}
