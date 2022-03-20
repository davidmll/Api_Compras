import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compras } from 'src/app/interfaces/compras';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-show-compras',
  templateUrl: './show-compras.component.html',
  styleUrls: ['./show-compras.component.css'],
})
export class ShowComprasComponent implements OnInit {
  compras: Compras[] = [];

  constructor(private serviceCompra: ComprasService,private router:Router) {}

  ngOnInit(): void {
    this.compras = this.serviceCompra.getCompras();
  }

  redirigirUpdate(app: Compras[]){
    this.router.navigate(["compras/update"]);
    this.serviceCompra.updateCompra = app;

  }
}
