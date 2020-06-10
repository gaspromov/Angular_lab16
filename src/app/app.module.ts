import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule} from "ngx-mask";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterSortPipe } from './shared/pipes/filter-sort.pipe';
import { AddComponent } from './add/add.component';
import { EditItComponent } from './it/edit-it/edit-it.component';
import { ViewItComponent } from './it/view-it/view-it.component';
import { ViewSalesComponent } from './sales/view-sales/view-sales.component';
import { EditSalesComponent } from './sales/edit-sales/edit-sales.component';
import { ViewLegalComponent } from './legal/view-legal/view-legal.component';
import { EditLegalComponent } from './legal/edit-legal/edit-legal.component';
import { ViewDeliveryComponent } from './delivery/view-delivery/view-delivery.component';
import { EditDeliveryComponent } from './delivery/edit-delivery/edit-delivery.component';
import { DateToAgePipe } from './shared/pipes/date-to-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterSortPipe,
    AddComponent,
    EditItComponent,
    ViewItComponent,
    ViewSalesComponent,
    EditSalesComponent,
    ViewLegalComponent,
    EditLegalComponent,
    ViewDeliveryComponent,
    EditDeliveryComponent,
    DateToAgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
