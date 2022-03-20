import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-table-compras',
  templateUrl: './table-compras.component.html',
  styleUrls: ['./table-compras.component.css']
})
export class TableComprasComponent implements OnInit {



  constructor(private serviceCompra: ComprasService) { }

  ngOnInit(): void {


  }


}
