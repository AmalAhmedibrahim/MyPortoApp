import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperHeaderComponent } from './components/upper-header/upper-header.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { HeaderComponent } from './header.component';
import { WelcomeControlComponent } from './components/welcome-control/welcome-control.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UpperHeaderComponent,
    LanguageSwitcherComponent,
    HeaderComponent,
    WelcomeControlComponent,
    MainMenuComponent,
    ShoppingCardComponent
  ],
  exports:[
    UpperHeaderComponent,
    LanguageSwitcherComponent,
    HeaderComponent
  ]
})
export class HeaderModule { }
