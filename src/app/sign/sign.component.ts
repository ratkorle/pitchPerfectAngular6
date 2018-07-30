import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthenticateService} from '../shared/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
              private auth: AuthenticateService,
              private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, Validators.required],
    });

  }

  signup(formData: NgForm) {
    return this.auth.signup(formData).subscribe(
      (user) => {
        console.log(`added user ${JSON.stringify(user)}`);
        this.router.navigate(['login']);
      });
  }


}
