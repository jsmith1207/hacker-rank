import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainNavBarComponent } from 'src/app/navigation/mainnavbar.component';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';
import { MidTextComponent } from './Body/midtext.component';
import { ImgBarComponent } from './Information/imgbar.component';
import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './navigation/bottomnavbar.component';
import { FooterComponent } from './navigation/footer.component';
import { CarouselComponent } from './Information/carousel.component';
import { TopCartComponent } from './Body/topcart.component';
import { HeroOneComponent } from './Body/heroone.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Access/login.component';
import { HomeLayoutComponent } from './Home Layout/home-layout.component';
import { SignupComponent } from './Access/signup.component';
import { DemoRequestComponent } from './Access/demo-request.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    MainNavBarComponent,
    MidTextComponent,
    ImgBarComponent,
    BottomNavBarComponent,
    FooterComponent,
    CarouselComponent,
    TopCartComponent,
    HeroOneComponent,
    LoginComponent,
    SignupComponent,
    DemoRequestComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
