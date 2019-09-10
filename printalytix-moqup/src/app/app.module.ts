import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { PagesModule } from "./pages/pages.module";
import { Forms1Module } from "./forms/forms.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    Forms1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
