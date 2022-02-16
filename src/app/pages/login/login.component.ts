import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  public login() {
    const user = {
      email: this.email,
      password: this.password
    }
    return this.authService.login(user)
      .then(() => {
        console.log('PASO');
        return this.router.navigate(['/']);
      })
      .catch((err) => {
        console.error(err.message);
        return false;
      })
  }

}
