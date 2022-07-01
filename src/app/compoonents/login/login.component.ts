import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)])
  });
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login() {
    // @ts-ignore
    this.authService.login(this.loginForm.value).subscribe(res=>console.log(res));
  }
}
