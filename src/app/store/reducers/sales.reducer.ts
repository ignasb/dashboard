import { createReducer, on } from '@ngrx/store';
import { Sales, UserApi } from 'src/app/core/models';
import { SalesActions } from '../actions';
export interface ISalesState {
  sales: Sales.ISale[];
  bestSalesman: UserApi.IUserCredentialsApi;
  overallSale: number;
}
const initialState: ISalesState = {
  sales: [],
  bestSalesman: null as any,
  overallSale: 0,
};

export const salesReducer = createReducer<ISalesState>(
  initialState,
  on(SalesActions.loadSalesSuccess, (state, { sales }) => ({
    ...state,
    sales,
  })),
  on(SalesActions.loadSalesFail, (state) => ({ ...state, sales: [] })),

  on(SalesActions.loadBestSalesmanSuccess, (state, { salesman }) => ({
    ...state,
    bestSalesman: salesman,
  })),
  on(SalesActions.loadBestSalesmanFail, (state) => ({
    ...state,
    bestSalesman: null as any,
  })),

  on(SalesActions.loadOverallSalesSuccess, (state, { sales }) => ({
    ...state,
    overallSale: sales,
  })),
  on(SalesActions.loadOverallSalesFail, (state) => ({
    ...state,
    overallSale: 0,
  }))
);
