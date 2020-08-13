
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ]
})
export class ComponentsModule{}