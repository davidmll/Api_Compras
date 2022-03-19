import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Compras } from 'src/app/interfaces/compras';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-add-compras',
  templateUrl: './add-compras.component.html',
  styleUrls: ['./add-compras.component.css'],
})
export class AddComprasComponent implements OnInit {

  formularioCompras!: FormGroup;

  constructor(private serviceCompra: ComprasService) {}

  ngOnInit(): void {
    this.formularioCompras = new FormGroup({
      codCompra: new FormControl('', Validators.required),
      codCliente: new FormControl('', Validators.required),
      codArticulo: new FormControl('', Validators.required),
      fecha: new FormControl(''),
      unidades: new FormControl('', Validators.required),
    });
  }

  ver() {
    const data = this.formularioCompras.value;
    this.serviceCompra.AddCompra(data).subscribe(
      ()=>{
        console.log("Compra add");

      },
      (error)=>{
        console.log("Compra error" + error);

      }
    );

  }
}
