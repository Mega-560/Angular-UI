import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

 
  ngOnInit() {
      this.items = [
          {
          label: 'Edit',
          icon:'pi pi-home layout-menuitem-icon',
          items: [
              {
                  label: 'Left',
                  icon:'pi pi-fw pi-align-left'
              },
              {
                  label: 'Right',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label: 'Center',
                  icon:'pi pi-fw pi-align-center'
              },
              {
                  label: 'Justify',
                  icon:'pi pi-fw pi-align-justify'
              }
        
          
      ]
    },


    {
      label: 'Edit',
      icon:'pi pi-share-alt layout-menuitem-icon',
      items: [
          {
              label: 'Left',
              icon:'pi pi-fw pi-align-left'
          },
          {
              label: 'Right',
              icon:'pi pi-fw pi-align-right'
          },
          {
              label: 'Center',
              icon:'pi pi-fw pi-align-center'
          },
          {
              label: 'Justify',
              icon:'pi pi-fw pi-align-justify'
          }
    
      
  ]
},
{
  label: 'Edit',
  icon:'pi pi-th-large layout-menuitem-icon',
  items: [
      {
          label: 'Left',
          icon:'pi pi-fw pi-align-left'
      },
      {
          label: 'Right',
          icon:'pi pi-fw pi-align-right'
      },
      {
          label: 'Center',
          icon:'pi pi-fw pi-align-center'
      },
      {
          label: 'Justify',
          icon:'pi pi-fw pi-align-justify'
      }

  
]
},
{
  label: 'Edit',
  icon:'pi pi-fw pi-pencil',
  items: [
      {
          label: 'Left',
          icon:'pi pi-fw pi-align-left'
      },
      {
          label: 'Right',
          icon:'pi pi-fw pi-align-right'
      },
      {
          label: 'Center',
          icon:'pi pi-fw pi-align-center'
      },
      {
          label: 'Justify',
          icon:'pi pi-fw pi-align-justify'
      }

  
]
},
{
  label: 'Edit',
  icon:'pi pi-sign-in layout-menuitem-icon',
  items: [
      {
          label: 'Left',
          icon:'pi pi-fw pi-align-left'
      },
      {
          label: 'Right',
          icon:'pi pi-fw pi-align-right'
      },
      {
          label: 'Center',
          icon:'pi pi-fw pi-align-center'
      },
      {
          label: 'Justify',
          icon:'pi pi-fw pi-align-justify'
      }

  
]
},






      ]
  }
  }
