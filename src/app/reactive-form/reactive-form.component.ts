// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { HttpClient, HttpHeaders  } from '@angular/common/http';

// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html'
// })
// export class ReactiveFormComponent implements OnInit{
//  constructor(private http: HttpClient ){}
//  loginForm!:FormGroup;
//  ngOnInit(){
//    this.loginForm=new FormGroup({
//     email:new  FormControl(["",[Validators.required]]),
//     password:new FormControl(["",[Validators.required,Validators.maxLength(8)]])
//    })
//  }
//  onSubmit (user: any): void  {
// 	console.log(user);    
//     if (this.loginForm.valid) {
//     let url = "https://reqres.in/api/users";     
//         const headers = new HttpHeaders()
//           .set('Authorization', 'my-auth-token')
//           .set('Content-Type', 'application/json');
//       this.http.post(url, user).subscribe(res => console.log("Data Post Done"));
    
// 	}
//   }
//  get email(){
//   return this.loginForm.get("email")
//  }
//  get password(){
//   return this.loginForm.get("password")
//  }
// }
