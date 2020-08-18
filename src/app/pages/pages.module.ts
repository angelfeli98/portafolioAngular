
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from '../app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contacUs/contacUs.component';
import { ArticleComponent } from './article/article.component';
import { ComponentsModule } from '../components/components.module';
import { SearchComponent } from './search/search.components';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        ItemComponent,
        BlogComponent,
        ContactUsComponent,
        ArticleComponent,
        SearchComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        ComponentsModule
    ],
    exports: [
        HomeComponent,
        AboutComponent,
        ItemComponent,
        BlogComponent,
        ContactUsComponent,
        ArticleComponent,
        SearchComponent
    ]
})
export class PagesModule{}