import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public name = '';
  public email = '';
  public password = '';
  public repeatPassword = '';
  public statusError = {
    hide: true,
    message: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  public signup() {
    console.log('Ingreso');
    if (this.password !== this.repeatPassword) {
      this.statusError.message = 'The password are differet';
      this.statusError.hide = false;
      return false;
    }
    const dataUser = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    return this.authService.signUp(dataUser)
      .then(() => {
        return this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.error(err.message);
      })
  }
}
