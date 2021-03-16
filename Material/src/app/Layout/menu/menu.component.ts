import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { NavItem } from 'src/app/Models/nav-item.model';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements  OnDestroy {

  
show=true;


  menu: NavItem [] = [
       
        {
          displayName: 'home',
          iconName: 'description',          
          children: [
            {
              displayName: 'home',
              iconName: 'how_to_reg',
              route: '/home'
            },
          
          ]
        },
        {
          displayName: 'Login',
          iconName: 'description',          
          children: [
            {
              displayName: 'home',
              iconName: 'how_to_reg',
              route: '/login'
            },
         
          ]
        },
        {
          displayName: 'Sign up',
          iconName: 'description',          
          children: [
            {
              displayName: 'sign up',
              iconName: 'how_to_reg',
              route: '/signup'
            },
          
          ]
        },
        
      ];
  mobileQuery: MediaQueryList;

  

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

 
}
