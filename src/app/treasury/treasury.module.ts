import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TreasuryComponent } from './treasury.component';

@NgModule({
  declarations: [
      TreasuryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [TreasuryComponent]
})
export class TreasuryModule { } 