import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html'
})

export class DataDrivenComponent {
  myForm: FormGroup;

 

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private  router2:Router, private myHttpService: HttpService) {

 //  this.myHttpService = myHttpService;
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'name': ['', [Validators.required]],
        'email': ['', [
          Validators.required,
          
        ]],
        'post':['', [ Validators.required, Validators.minLength(10)]],
      }),
 
     
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );

    

  }

  onGetData() {
    console.log('****');
    this.myHttpService.getUserInfo().subscribe((res)=>{
      this.myHttpService.getPostInfo().subscribe((res2)=>{
       
        this.myForm.setValue({userData: {name:res['name'], email:res['email'], post:res2[0]['body']}});
      });
    });
   
      }

     

  onSubmit() {
    console.log(this.myForm.value.userData);
    this.router2.navigateByUrl('thankyou');

  }



}
