import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "../app-routing.module";
import { StepProgressBarComponent } from "./step-progress-bar/step-progress-bar.component";

@NgModule({
  declarations: [HeaderComponent, StepProgressBarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, StepProgressBarComponent]
})
export class ComponentsModule {}
