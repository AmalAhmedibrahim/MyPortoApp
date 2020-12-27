import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { FilterTagsComponent } from './components/filter-tags/filter-tags.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [FilterListComponent, FilterTagsComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
