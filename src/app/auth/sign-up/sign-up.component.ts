import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserGQL } from 'src/generated-types';
import { LoginService } from '../login/login.service';
import { CreateUserInput } from 'src/generated-types'
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{

  constructor(private readonly createUserGql: CreateUserGQL,
    private readonly loginService: LoginService,
    private readonly router: Router) {}
  ngOnInit(): void {
  }

  signUp(createUserData: CreateUserInput) {
    this.createUserGql
        .mutate({createUserData})
        .pipe(
          concatMap(() => {
            return this.loginService.login(createUserData)
          })
        )
        .subscribe(() => {
          this.router.navigate(['/'])
        })
  }

}
