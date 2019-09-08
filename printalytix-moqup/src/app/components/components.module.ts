import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "../app-routing.module";
import { StepProgressBarComponent } from "./step-progress-bar/step-progress-bar.component";
import { ChatbotComponent } from "./chatbot/chatbot.component";

@NgModule({
  declarations: [HeaderComponent, StepProgressBarComponent, ChatbotComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, StepProgressBarComponent, ChatbotComponent]
})
export class ComponentsModule {}
