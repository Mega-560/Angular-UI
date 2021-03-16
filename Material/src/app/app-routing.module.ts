import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { SingupComponent } from './Account/singup/singup.component';
import { DashboardComponent } from './pages/dashboard.component';

const routes: Routes = [
  {path:'' ,component:LoginComponent},
  {path:'home', component:DashboardComponent},
  {path:'login' ,component:LoginComponent},
  {path:'signup' ,component:SingupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
