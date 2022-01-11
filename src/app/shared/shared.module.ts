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

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
