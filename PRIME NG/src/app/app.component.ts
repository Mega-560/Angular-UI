import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgPrime';

  show: boolean = true;
  status: boolean = false;
  states: boolean = false;
  onMenuButtonClick(event: Event) {

    this.status = !this.status;    
    this.states=!this.states;
    // if(this.show == true)
    // {
    //   this.show=false;
    // } 
    // else
    // {
    //   this.show=true;
    // }

   // return this.show ? true : false 
  }
}
