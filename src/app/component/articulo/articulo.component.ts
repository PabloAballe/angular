import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articulo } from "../../../articulos";


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
articulo;
  constructor( private route: ActivatedRoute,
  ) { }

  ngOnInit() {

  }

}
