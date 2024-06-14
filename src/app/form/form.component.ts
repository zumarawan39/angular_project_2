import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor() { }

  fname: string = "";
  lname: string = "";
  email: string = "";
  number: string = "";

  okValu(data: NgForm) {
   prompt("Sign in successfully")
  }
}
