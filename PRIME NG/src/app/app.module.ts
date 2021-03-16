import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Account/login/login.component';
import { ForgotComponent } from './Account/forgot/forgot.component';
import { SingupComponent } from './Account/singup/singup.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import { NavComponent } from './Layout/nav/nav.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import{DashboardComponent} from 'src/app/pages/dashboard.component'
import {CheckboxModule} from 'primeng/checkbox';
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
    MenubarModule,
    InputTextModule,
    ButtonModule,
      FormsModule ,
      SharedModule,
      PanelMenuModule,
      CheckboxModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
