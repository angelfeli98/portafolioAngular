
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        ProductComponent
    ]
})
export class ComponentsModule{}