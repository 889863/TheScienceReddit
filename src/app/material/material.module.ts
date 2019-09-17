import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule, MatDialogModule  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule]
})
export class MaterialModule { }
