import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  getUserInfo (){
    return this.http.get('http://jsonplaceholder.typicode.com/users/1')  ;
  
  }

  getPostInfo(){
  
    return  this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
  
  
  }

  }




