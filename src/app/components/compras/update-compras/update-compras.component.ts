import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-update-compras',
  templateUrl: './update-compras.component.html',
  styleUrls: ['./update-compras.component.css'],
})
export class UpdateComprasComponent implements OnInit {
  formularioUpdateCompras: any;
  constructor(private route: Router,private serviceCompra: ComprasService) {
    // const seccionParams = this.route.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {

    const valor = this.serviceCompra.updateCompra;

    this.formularioUpdateCompras = new FormGroup(
      {
        codCompra: new FormControl( valor.codCompra,[Validators.required]),
        codCliente: new FormControl( valor.codCliente,[Validators.required]),
        codArticulo: new FormControl( valor.codArticulo,[Validators.required]),
        fecha: new FormControl( valor.fecha,[Validators.required]),
        unidades: new FormControl( valor.unidades,[Validators.required])
      }
    );

    console.log(this.formularioUpdateCompras);

  }

  updateCompra() {}
}
