import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    LoginModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
