import { Component, OnInit } from '@angular/core';
import { CSRFService } from './services/csrf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'online-shop';
  public x_xsrfToken:string;
  public complete: boolean;

constructor(  private csrfService:CSRFService){

}


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
       this.complete=true;
      }
    });

  }
}
