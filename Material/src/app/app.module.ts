import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './Account/login/login.component';
import { ForgotComponent } from './Account/forgot/forgot.component';
import { SingupComponent } from './Account/singup/singup.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { NavComponent } from './Layout/nav/nav.component';
import { DashboardComponent } from './pages/dashboard.component';



import { DemoMaterialModule} from 'src/app/material-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    SingupComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent,MenuComponent]
 
 
 
})
export class AppModule { }
