import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmedValidator } from './confirmed.validator';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  faLock = faLock;
 loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  // if(this.loginForm.valid)
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  
  ) {}
    
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$'),
          Validators.maxLength(30),
        ],
      ],
       password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$'
          ),
          Validators.maxLength(22),
        ],
      ],
     confirm_password : [
       '', 
       [
         Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$'),
            Validators.maxLength(22),
       ]
      ]
     
      
    },{ 
      validator: ConfirmedValidator('password', 'confirm_password')
    });

    //"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
     if(this.loginForm)
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
    // this.loginForm = this.fb.group({
    //    email : this.fb.control('', Validators.required),
    //    password : this.fb.control('',Validators.required)
    // },{UpdateOn :'submit'})
  }
  get f(){
    return this.loginForm.controls;
  }
  
  onSubmit(): void {
  //  this.loginForm.get('password')?.invalid;
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }

  }
}
