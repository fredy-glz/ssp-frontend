import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { RestApiService } from './rest-api.service';

@Injectable()
export class DataService {
  message = '';
  messageType = 'danger';

  user: any;
  cartItems = 0;

  constructor(private router: Router, private rest: RestApiService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.message = '';
      }
    });
  }

  async getProfile() {
    // try {
    //   if (localStorage.getItem('token')) {
    //     const data = await this.rest.get(
    //       'http://localhost:3000/api/alumno',
    //     );
    //     this.user = data['user'];
    //     console.log(this.user);
    //   }
    // } catch (e) {
    // }
    const data = await this.rest.get(
            'http://localhost:3000/api/alumno',
          );
          this.user = data['user'];
          console.log(this.user);
  }
}
