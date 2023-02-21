import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoginIn$: Observable<boolean>
  constructor(private readonly authService: AuthService) {
    this.isLoginIn$ = authService.authenticated$
  }

  onLogout() {
    this.authService.logout()
  }


}
