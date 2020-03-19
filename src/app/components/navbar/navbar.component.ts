import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { JobService } from "src/app/services/job.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  phoneNumber;
  constructor(private router: Router, private jobService: JobService) {}

  ngOnInit() {
    this.jobService.currentPhoneNumber$.subscribe(phoneNumber => {
      this.phoneNumber = phoneNumber;
    });
  }
  navigateTo() {
    this.router.navigate([""]);
  }
  isJobRoute(value: string): boolean {
    return /^\/vacature(\/|$)/.test(value);
  }
  callPhoneNumber() {
    document.location.href = `tel:${this.phoneNumber}`;
  }
}
