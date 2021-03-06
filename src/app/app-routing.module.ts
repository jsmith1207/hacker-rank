import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Access/login.component';
import { ProductLayoutComponent } from './ProductsPage/product-layout.component';
import { SignupComponent } from './Access/signup.component';
import { DemoRequestComponent } from './Access/demo-request.component';
import { OurTeamComponent } from './Company/our-team.component';
import { HomeLayoutComponent } from './HomePage/home-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent
  },
  {
    path: 'our-team',component: OurTeamComponent
  },
  {
    path: 'request-demo', component: DemoRequestComponent
  },
  {
    path: 'create-account', component: SignupComponent
  },
  {
    path: 'access-account', component: LoginComponent
  },
  {
    path: 'product',
    component: ProductLayoutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
