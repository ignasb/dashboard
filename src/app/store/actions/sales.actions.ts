import { createAction, props } from '@ngrx/store';
import { Sales, User, UserApi } from 'src/app/core/models';

export const loadSales = createAction(
  '[Sales] LOAD_SALES',
  props<{ token: string }>()
);
export const loadSalesSuccess = createAction(
  '[Sales] LAOD_SALES_SUCCESS',
  props<{ sales: Sales.ISale[] }>()
);
export const loadSalesFail = createAction('[Sales] LOAD_SALES_FAIL');

export const loadOverallSales = createAction(
  '[Sales] LOAD_OVERALL_SALES',
  props<{ token: string }>()
);
export const loadOverallSalesSuccess = createAction(
  '[Sales] LAOD_OVERALL_SALES_SUCCESS',
  props<{ sales: number }>()
);
export const loadOverallSalesFail = createAction(
  '[Sales] LOAD_OVERALL_SALES_FAIL'
);

export const loadBestSalesman = createAction(
  '[Sales] LOAD_BEST_SALESMAN',
  props<{ token: string }>()
);
export const loadBestSalesmanSuccess = createAction(
  '[Sales] LAOD_BEST_SALESMAN_SUCCESS',
  props<{ salesman: UserApi.IUserCredentialsApi }>()
);
export const loadBestSalesmanFail = createAction(
  '[Sales] LOAD_OVERALL_SALES_FAIL'
);
