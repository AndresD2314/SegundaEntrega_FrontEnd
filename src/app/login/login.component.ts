import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

interface JwtToken {
  sub: string;
  iat: number;
  exp: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(`username: ${this.username}, password: ${this.password}`); // add this line
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:11234/api/v1/auth/authenticate', credentials, { headers })
      .subscribe(
        response => {
          const token = response.access_token;
          console.log(response)
          const decodedToken: JwtToken = jwt_decode(token);
          this.username = decodedToken.sub;
          alert(`You are logged in as ${this.username}`);
        },
        error => {
          alert('Wrong login info');
        }
      );
  }
}




