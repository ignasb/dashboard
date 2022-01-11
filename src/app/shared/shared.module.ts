import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
})
export class SharedModule {}
