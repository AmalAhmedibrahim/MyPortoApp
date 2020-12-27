import { HeaderModule } from './layout/header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [    
    AppComponent,  
    FooterComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
