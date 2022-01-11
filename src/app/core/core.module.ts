import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { UserApiService } from './services/user-api.service';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, LayoutComponent],
  providers: [UserApiService],
})
export class CoreModule {}
