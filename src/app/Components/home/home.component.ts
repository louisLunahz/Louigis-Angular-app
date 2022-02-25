import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public product: Product;
  public x_xsrfToken: string;

  constructor( 
    private productService: ProductService, 
  
    ) { }

  ngOnInit(): void {
    this.productService.getProductById(1).subscribe({
      next: (data)=>{
        console.log(data);
        this.product=data;
      }, 
      error: (error)=>{
        console.log(error);
      }, 
      complete: ()=>{
        console.log("everthing was completed");
      }
    });
    
 
  
   
  }




}
