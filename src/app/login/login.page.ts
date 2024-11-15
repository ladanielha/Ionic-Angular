import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // validations_form: FormGroup;
  // errorMessage: string = '';

  // validation_messages = {
  //   email: [
  //     { type: 'required', message: 'Email is required.' },
  //     { type: 'pattern', message: 'Enter a valid email.' }
  //   ],
  //   password: [
  //     { type: 'required', message: 'Password is required.' }
  //   ]
  // };

  constructor(
    private navCtrl: NavController,
    private authSrv: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    // this.validations_form = this.formBuilder.group({
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   password: new FormControl('', Validators.compose([
    //     Validators.minLength(5),
    //     Validators.required
    //   ]))
    // });
  }

  // loginUser(value) {
  //   this.authSrv.loginUser(value)
  //     .then(res => {
  //       console.log(res);
  //       this.errorMessage = '';
  //       localStorage.setItem('login', '1');
  //       this.router.navigateByUrl('/home/tabs/main');
  //     }, err => {
  //       this.errorMessage = err.message;
  //     });
  // }

  logIn(email, password) {
    this.authSrv.loginUser(email.value, password.value)
        .then((res) => {
          if(this.authSrv.isEmailVerified) {
            this.router.navigate(['home/tabs/main']);
          } else {
            window.alert('Email is not verified')
            return false;
          }
        }).catch((error) => {
      window.alert(error.message)
    })
  }

  goToRegisterPage() {
    this.router.navigateByUrl('/register1');
  }

  goToForgotPassPage() {
    this.router.navigateByUrl('/forgotpass1');
  }


}
