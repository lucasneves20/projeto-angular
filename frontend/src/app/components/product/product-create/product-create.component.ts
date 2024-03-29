import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'
import { Router } from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  constructor(private productService: ProductService, private router: Router ) { }


  product: Product = {
    id: null,
    name: '',
    price: null
  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {  
      this.productService.showMessage('Operação executada com sucesso')
    })

  }

  cancel(): void {
    this.router.navigate([ '/' ])
  }

}
