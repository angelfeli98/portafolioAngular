
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(APP_ROUTES, {useHash: false})
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}