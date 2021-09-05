import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { CardSpinnerComponent } from 'src/app/shared/card-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    LoaderModule
  ],
  declarations: [
    CardSpinnerComponent
  ],
  providers: [],
  exports: [
    CardSpinnerComponent
  ]
})
export class SharedModule { }
