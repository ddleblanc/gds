import { Component } from "@angular/core";
import { BottomNavItem } from "ngx-bottom-nav";
import { Router } from "@angular/router";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("bottomNavAnimation", [
      transition(":enter", [
        style({ transform: "translateY(100%)" }),
        animate("500ms ease-in-out", style({ transform: "translateY(0%)" }))
      ]),
      transition(":leave", [
        style({ transform: "translateY(0%)" }),
        animate("500ms ease-in-out", style({ transform: "translateY(100%)" }))
      ])
    ])
  ]
})
export class AppComponent {
  constructor(private router: Router) {}
  title = "angular-src";
  items: BottomNavItem[] = [
    { icon: "home", label: "Home", routerLink: "" },
    { icon: "bookmark", label: "Opgeslagen", routerLink: "contact" },
    { icon: "forum", label: "Contact", routerLink: "contact" }
  ];
}
