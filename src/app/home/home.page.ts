import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any;
  constructor(public authService: DataService, public router: Router) {
    this.user = authService.getProfile();
  }

  async logout() {
    this.authService
      .signOut()
      .then(() => {
        this.router.navigate(['/landing']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
