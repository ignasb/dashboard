import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ILoginCredentials } from '../models/data/user';
import { IUserCredentialsApi } from '../models/http/user-api';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor() {}

  login$(credentials: ILoginCredentials): Observable<IUserCredentialsApi> {
    const { password, username } = credentials;

    return new Observable((subscriber) => {
      setTimeout(() => {
        if (password === 'admin' && username === 'admin') {
          subscriber.next({
            username,
            password,
            token: 'TEST_TOKEN',
          });

          subscriber.complete();
        } else {
          subscriber.error(new Error('Error while logging in.'));
          subscriber.complete();
        }
      }, 1000);
    });
  }
}
