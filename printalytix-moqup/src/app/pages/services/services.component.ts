import { Component, OnInit } from "@angular/core";
import { CircleMenuFx } from "../../../assets/js/circle_menu";
@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent implements OnInit {
  constructor() {
    new CircleMenuFx(document.querySelector(".circle_menu"));
  }

  ngOnInit() {}
}
