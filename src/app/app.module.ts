import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatMenuModule } from "@angular/material/menu";
import { BottomNavModule } from "ngx-bottom-nav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";

import { MomentModule } from "ngx-moment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { JobFeedComponent } from "./pages/job-feed/job-feed.component";
import { MatTabsModule } from "@angular/material/tabs";
import { JobListComponent } from "./components/job-list/job-list.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { JobDetailComponent } from "./pages/job-detail/job-detail.component";
import { JobService } from "./services/job.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JobFeedComponent,
    JobListComponent,
    ContactComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MomentModule,
    MatChipsModule,
    MatMenuModule,
    BottomNavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule {}
