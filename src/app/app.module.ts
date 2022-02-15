import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainNavBarComponent } from 'src/app/navigation/mainnavbar.component';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';
import { MidTextComponent } from './Body/midtext.component';
import { ImgBarComponent } from './Information/imgbar.component';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';
import { FooterComponent } from './navigation/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    MainNavBarComponent,
    MidTextComponent,
    ImgBarComponent,
    BottomNavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
