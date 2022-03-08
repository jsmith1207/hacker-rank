import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { mock_pricing_list } from './PricingPage/mock_pricing_list';
import { PricingItemModel } from './PricingPage/pricing-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hacker-rank'; 
    pricing: PricingItemModel [] = [];

  
  }

