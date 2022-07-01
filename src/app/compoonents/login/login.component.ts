import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Login} from "../../models/login";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(private authService:AuthService,
              private tokenService:TokenService,
              private fb : FormBuilder,
              private accountService:AccountService,
              private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:this.fb.control(null,[Validators.required,Validators.email]),
      password:this.fb.control(null,[Validators.required,Validators.minLength(8),Validators.maxLength(20)])
    })
  }

  login() {
    let data:Login=this.loginForm.value;
    this.authService.login(data).subscribe(res=>this.handelResponse(res));
  }
  handelResponse(res:any){
    this.tokenService.handle(res);
    this.accountService.changeStatus(true);
    this.router.navigateByUrl("/address");
  }

}
