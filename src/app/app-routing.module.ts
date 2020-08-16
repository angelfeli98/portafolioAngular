
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactUsComponent } from './pages/contacUs/contacUs.component';
import { ArticleComponent } from './pages/article/article.component';

export const APP_ROUTES: Routes = [
    { path: 'home', pathMatch: 'full' ,component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contactUs', component: ContactUsComponent },
    { path: 'article/:id', component: ArticleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
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