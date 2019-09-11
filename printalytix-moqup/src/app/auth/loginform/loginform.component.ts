import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  constructor(private AuthSer: AuthService, private route: Router) { }

  ngOnInit() {
  }
  Login() {
    this.AuthSer.isLoggedIn = true;
    this.route.navigate(['/']);
  }
}
