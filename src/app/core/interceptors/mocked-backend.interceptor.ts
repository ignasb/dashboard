import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import {
  delay,
  dematerialize,
  materialize,
  mergeMap,
  Observable,
  of,
  throwError,
} from 'rxjs';
import { bestSalesman, sales, users } from './mocked-backend-data';

@Injectable()
export class MockedBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/user/login') && method === 'POST':
          return login();
        case url.endsWith('/user/refreshToken') && method === 'POST':
          return refreshToken();
        case url.endsWith('/sales') && method === 'GET':
          return getSales();
        case url.endsWith('/sales/best-salesman') && method === 'GET':
          return getBestSalesman();
        case url.endsWith('/sales/overall-sales') && method === 'GET':
          return getOverallSales();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    function login() {
      const { username, password } = body;
      const user = users.find(
        (x) => x.username === username && x.password === password
      );
      if (!user) return error('Username or password is incorrect');
      return ok({
        ...user,
      });
    }

    function refreshToken() {
      return ok({ token: `REFRESHED_TOKEN_${new Date().getTime()}` });
    }

    function getSales() {
      return ok(sales);
    }

    function getBestSalesman() {
      return ok(bestSalesman);
    }

    function getOverallSales() {
      return ok(
        sales.reduce((total, sale) => {
          return total + sale.amount;
        }, 0)
      );
    }

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message: any) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }
  }
}

export const mockedBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: MockedBackendInterceptor,
  multi: true,
};
