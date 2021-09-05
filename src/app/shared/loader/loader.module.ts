import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [LoaderComponent],
  declarations: [LoaderComponent],
  providers: [LoaderService],
})
export class LoaderModule { }
