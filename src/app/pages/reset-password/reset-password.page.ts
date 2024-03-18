import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: any;
  constructor(
    public navCtrl: NavController,
    public authService: DataService,
    public router: Router
  ) {}

  ngOnInit() {}

  back() {
    this.navCtrl.back();
  }

  async resetPassword() {
    this.authService
      .resetPassword(this.email)
      .then(() => {
        console.log('Reset link sent');
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
