import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'travel-docs';

  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(){
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigateByUrl('nav');
      } else {
        this.router.navigateByUrl('login');
      }
    });
  }
}
