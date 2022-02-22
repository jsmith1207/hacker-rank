import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainNavBarComponent } from 'src/app/Home Layout/navigation/mainnavbar.component';
import { TopNavBarComponent } from 'src/app/Home Layout/navigation/topnavbar.component';
import { MidTextComponent } from './Home Layout/Body/midtext.component';
import { ImgBarComponent } from './Home Layout/Information/imgbar.component';
import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './Home Layout/navigation/bottomnavbar.component';
import { FooterComponent } from './Home Layout/navigation/footer.component';
import { CarouselComponent } from './Home Layout/Information/carousel.component';
import { TopCartComponent } from './Home Layout/Body/topcart.component';
import { HeroOneComponent } from './Home Layout/Body/heroone.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Access/login.component';
import { HomeLayoutComponent } from './Home Layout/home-layout.component';
import { SignupComponent } from './Access/signup.component';
import { DemoRequestComponent } from './Access/demo-request.component';
import { OurTeamComponent } from './Company/our-team.component';
import { CardGroupomponent } from './Home Layout/Information/cardgroup.component';
import { ResourcesCardsComponent } from './Home Layout/navigation/resourcescards.component';
import { FreeTrailComponent } from './FreeTrail/freetrail.component';

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
    FreeTrailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
