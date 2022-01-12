import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISale } from '../models/sales-api';
import { IUserCredentialsApi } from '../models/user-api';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  PATH = 'sales';

  constructor(private readonly httpClient: HttpClient) {}

  getSales$(token: string): Observable<ISale[]> {
    return this.httpClient.get<ISale[]>(`/${this.PATH}`, {
      headers: new HttpHeaders({ token }),
    });
  }

  getBestSalesman$(token: string): Observable<IUserCredentialsApi> {
    return this.httpClient.get<IUserCredentialsApi>(
      `/${this.PATH}/best-salesman`,
      { headers: new HttpHeaders({ token }) }
    );
  }

  getOverallSales$(token: string): Observable<number> {
    return this.httpClient.get<number>(`/${this.PATH}/overall-sales`, {
      headers: new HttpHeaders({ token }),
    });
  }
}
