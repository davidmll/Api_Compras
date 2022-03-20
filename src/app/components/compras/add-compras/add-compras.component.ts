import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compras } from 'src/app/interfaces/compras';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-add-compras',
  templateUrl: './add-compras.component.html',
  styleUrls: ['./add-compras.component.css'],
})
export class AddComprasComponent implements OnInit {

  formularioCompras!: FormGroup;

  colleccionCompra : Compras[] = [];

  constructor(private serviceCompra: ComprasService,private router: Router) {}

  ngOnInit(): void {
    this.formularioCompras = new FormGroup({
      codCompra: new FormControl(0, Validators.required),
      codCliente: new FormControl(0, Validators.required),
      codArticulo: new FormControl(0, Validators.required),
      fecha: new FormControl(''),
      unidades: new FormControl(0, Validators.required),
    });
  }

  addCompra(){
    const data = this.formularioCompras.value;

    this.serviceCompra.agregarCompra(data);

    this.router.navigate(["/compras"]);

  }
}
