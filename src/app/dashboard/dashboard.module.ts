import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardShellComponent } from './dashboard-shell/dashboard-shell.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardBestSalesmanComponent } from './dashboard-best-salesman/dashboard-best-salesman.component';
import { DashboardOverallSalesComponent } from './dashboard-overall-sales/dashboard-overall-sales.component';

@NgModule({
  declarations: [
    DashboardShellComponent,
    DashboardTableComponent,
    DashboardSettingsComponent,
    DashboardBestSalesmanComponent,
    DashboardOverallSalesComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
