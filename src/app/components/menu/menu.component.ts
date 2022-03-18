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
          routerLink: 'clientes',
          items:[
            {
              label:'Nuevo',
              icon:'pi pi-fw pi-plus',
              routerLink: 'clientes/nuevo'
            },
            {
              label:'Lista de clientes',
              icon:'pi pi-fw pi-plus',
              routerLink: 'clientes'
            }
          ]
        },
        {
          label:'Artículos',
          icon:'pi pi-fw pi-pencil',
          routerLink: 'articulos',
          items:[
            {
              label:'Nuevo',
              icon:'pi pi-fw pi-plus',
              routerLink: 'articulos/nuevo'
            },
            {
              label:'Lista de artículos',
              icon:'pi pi-fw pi-plus',
              routerLink: 'articulos'
            }
          ]
        },
        {
          label:'Compras',
          icon:'pi pi-fw pi-user',
          routerLink: 'compras',
          items:[
            {
              label:'Nueva',
              icon:'pi pi-fw pi-plus',
              routerLink: 'compras/nueva'
            },
            {
              label:'Lista de compras',
              icon:'pi pi-fw pi-user-minus',
              routerLink: 'compras'
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
