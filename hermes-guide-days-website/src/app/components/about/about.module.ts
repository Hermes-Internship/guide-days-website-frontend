import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [AboutComponent],
})
export class AboutModule {}
