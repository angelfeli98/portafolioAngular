
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        ItemComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        AppRoutingModule
    ],
    exports: [
        HomeComponent,
        AboutComponent,
        ItemComponent
    ]
})
export class PagesModule{}