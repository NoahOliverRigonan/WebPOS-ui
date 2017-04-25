import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/shared_header/shared_header_template/shared_header.html'
})
export class AppComponent {
  constructor(
    private router: Router
  ) { }

  public logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('token_type');
    localStorage.removeItem('userName');
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 500);
  }
}
