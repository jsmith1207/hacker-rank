import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainNavBarComponent } from 'src/app/ProductsPage/navigation/mainnavbar.component';
import { TopNavBarComponent } from 'src/app/ProductsPage/navigation/topnavbar.component';
import { MidTextComponent } from './ProductsPage/Body/midtext.component';
import { ImgBarComponent } from './ProductsPage/Information/imgbar.component';
import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './ProductsPage/navigation/bottomnavbar.component';
import { FooterComponent } from './ProductsPage/navigation/footer.component';
import { CarouselComponent } from './ProductsPage/Information/carousel.component';
import { TopCartComponent } from './ProductsPage/Body/topcart.component';
import { HeroOneComponent } from './ProductsPage/Body/heroone.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Access/login.component';
import { HomeLayoutComponent } from './ProductsPage/home-layout.component';
import { SignupComponent } from './Access/signup.component';
import { DemoRequestComponent } from './Access/demo-request.component';
import { OurTeamComponent } from './Company/our-team.component';
import { CardGroupomponent } from './ProductsPage/Information/cardgroup.component';
import { ResourcesCardsComponent } from './ProductsPage/navigation/resourcescards.component';

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
    HomeLayoutComponent,
    OurTeamComponent,
    CardGroupomponent,
    ResourcesCardsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
