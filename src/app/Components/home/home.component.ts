import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CSRFService } from 'src/app/services/csrf.service';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public product: Product;
  public x_xsrfToken: string="";

  constructor( 
    private productService: ProductService, 
    private csrfService:CSRFService
    ) { }

  ngOnInit(): void {
    
    this.csrfService.getAntiForgeryToken().subscribe({
      next:(token)=>{
        console.log(token);
         this.x_xsrfToken=token.AntiForgeryToken;
        localStorage.setItem("X-XSRF-TOKEN", this.x_xsrfToken);
      }, 
      error:()=>{
        console.log("could not get the token");
      }, 
      complete:()=>{
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
    });

  
   
  }




}
