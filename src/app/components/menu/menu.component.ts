import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items:MenuItem[] = [];

    ngOnInit() {
      this.items = [
        {
          label:'Clientes',
          icon:'pi pi-fw pi-users',
          items:[
            {
              label:'Nuevo',
              icon:'pi pi-fw pi-plus'
            },
            {
              label:'Lista de clientes',
              icon:'pi pi-fw pi-plus'
            }
          ]
        },
        {
          label:'Artículos',
          icon:'pi pi-fw pi-pencil',
          items:[
            {
              label:'Nuevo',
              icon:'pi pi-fw pi-plus'
            },
            {
              label:'Lista de artículos',
              icon:'pi pi-fw pi-plus'
            }
          ]
        },
        {
          label:'Ventas',
          icon:'pi pi-fw pi-user',
          items:[
            {
              label:'Nueva',
              icon:'pi pi-fw pi-plus'
            },
            {
              label:'Lista de ventas',
              icon:'pi pi-fw pi-user-minus'
            }
          ]
        },
        {
          label:'Events',
          icon:'pi pi-fw pi-calendar'
        },
        {
          label:'Quit',
          icon:'pi pi-fw pi-power-off'
        }
      ];
    }

}
