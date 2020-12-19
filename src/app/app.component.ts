import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  API_KEY: string;
  baseURL: string;
  selectedItem:number=20;
  imgResponse:any;
  loading:boolean;

  constructor(private http: HttpClient){
    this.API_KEY = '19263307-1a50b7bb08f77f3aaea03227e';
    this.baseURL="https://pixabay.com/api/?key="+this.API_KEY+"&q=";
    
  }

  
  onSearchImg(value){
    this.loading = true;
     return this.http.get(this.baseURL+value+"&per_page="+this.selectedItem).subscribe(data=>{
      this.imgResponse=data; this.loading=false;} ) 
 }
    
 openImg(page:any){
  window.open(page, "_blank")
 }
}
