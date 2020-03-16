import { Component, OnInit } from '@angular/core';
import { articulo } from "../../../articulos";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
articulo=articulo;
  constructor() { }

  ngOnInit(): void {
  }

}
