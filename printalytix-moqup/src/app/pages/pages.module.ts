import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServicesComponent } from "./services/services.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardModule } from "../dashboard/dashboard.module";

@NgModule({
  declarations: [DashboardComponent, ServicesComponent],
  imports: [CommonModule, DashboardModule],
  exports: [DashboardComponent, ServicesComponent]
})
export class PagesModule {}
