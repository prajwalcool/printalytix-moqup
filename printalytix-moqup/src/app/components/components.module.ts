import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "../app-routing.module";
import { StepProgressBarComponent } from "./step-progress-bar/step-progress-bar.component";
import { ChatbotComponent } from "./chatbot/chatbot.component";
import { StepPprogressBarComponent } from './step-pprogress-bar/step-pprogress-bar.component';
import { ProgressComponent } from '../pages/progress/progress.component';

@NgModule({
  declarations: [HeaderComponent, StepProgressBarComponent, ChatbotComponent, StepPprogressBarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, StepProgressBarComponent, ChatbotComponent, StepPprogressBarComponent]
})
export class ComponentsModule { }
