import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compras } from 'src/app/interfaces/compras';
import { ComprasService } from 'src/app/services/compras.service';
import { ArticulosComponent } from '../../articulos/tableArticulo/articulos.component';

@Component({
  selector: 'app-update-compras',
  templateUrl: './update-compras.component.html',
  styleUrls: ['./update-compras.component.css'],
})
export class UpdateComprasComponent implements OnInit {

  formularioUpdateCompras: any;
  valor:any;

  constructor(private serviceCompra: ComprasService,private router:Router) {
  }

  compra! : Compras;

  ngOnInit(): void {

    this.valor = this.serviceCompra.updateCompra;
    console.log(this.valor);

    this.compra = {
      "codCompra": this.valor.codCompra,
      "codArticulo": this.valor.codArticulo,
      "codCliente": this.valor.codCliente,
      "fecha":this.valor.fecha,
      "unidades":this.valor.unidades
    }
  }

  updateCompra() {
    this.router.navigate(["/compras"]);
    console.log(this.compra);
    this.serviceCompra.agregarCompra(this.compra);


  }
}
