import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ViewItComponent } from './it/view-it/view-it.component';
import { ViewSalesComponent } from './sales/view-sales/view-sales.component';
import { ViewDeliveryComponent } from './delivery/view-delivery/view-delivery.component';
import { ViewLegalComponent } from './legal/view-legal/view-legal.component';
import { EditItComponent } from './it/edit-it/edit-it.component';
import { EditSalesComponent } from './sales/edit-sales/edit-sales.component';
import { EditDeliveryComponent } from './delivery/edit-delivery/edit-delivery.component';
import { EditLegalComponent } from './legal/edit-legal/edit-legal.component';


const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "it", component: ViewItComponent },
  { path: "sales", component: ViewSalesComponent },
  { path: "delivery", component: ViewDeliveryComponent },
  { path: "legal", component: ViewLegalComponent },
  { path: 'it/edit/:id', component: EditItComponent },
  { path: 'sales/edit/:id', component: EditSalesComponent },
  { path: 'delivery/edit/:id', component: EditDeliveryComponent },
  { path: 'legal/edit/:id', component: EditLegalComponent },
  { path: "**", redirectTo: "/main" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
