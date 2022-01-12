import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { UserSelectors } from './selectors/user.selectors';
import { EffectsModule } from '@ngrx/effects';
import {
  LocalStorageEffects,
  UserEffects,
  NotificationEffects,
  RoutingEffects,
  SessionEffects,
} from './effects';
import { SharedModule } from '../shared/shared.module';
import { SalesSelectors } from './selectors/sales.selectors';
import { DashboardEffects } from './effects/dashboard.effects';
import { SalesEffects } from './effects/sales.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('appState', reducers),
    EffectsModule.forFeature([
      UserEffects,
      LocalStorageEffects,
      NotificationEffects,
      RoutingEffects,
      SessionEffects,
      DashboardEffects,
      SalesEffects,
    ]),
    SharedModule,
  ],
  exports: [StoreModule],
  providers: [UserSelectors, SalesSelectors],
})
export class AppStoreModule {}
