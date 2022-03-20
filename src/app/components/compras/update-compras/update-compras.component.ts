import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compras } from 'src/app/interfaces/compras';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-update-compras',
  templateUrl: './update-compras.component.html',
  styleUrls: ['./update-compras.component.css'],
})
export class UpdateComprasComponent implements OnInit {

  compra!: Compras;
  formularioUpdateCompras: any;
  valor: any;

  constructor(private serviceCompra: ComprasService, private router: Router) {}

  ngOnInit(): void {
    this.valor = this.serviceCompra.updateCompra;

    this.compra = {
      codCompra: this.valor.codCompra,
      codArticulo: this.valor.codArticulo,
      codCliente: this.valor.codCliente,
      fecha: this.valor.fecha,
      unidades: this.valor.unidades,
    };
  }

  updateCompra() {
    this.router.navigate(['/compras']);
    this.serviceCompra.updateCompras(this.compra, this.compra.codCompra);
  }
}
