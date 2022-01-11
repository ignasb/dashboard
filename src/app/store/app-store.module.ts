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
} from './effects';
import { SharedModule } from '../shared/shared.module';

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
    ]),
    SharedModule,
  ],
  exports: [StoreModule],
  providers: [UserSelectors],
})
export class AppStoreModule {}
