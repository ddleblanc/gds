import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobFeedComponent } from "./pages/job-feed/job-feed.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { JobDetailComponent } from "./pages/job-detail/job-detail.component";
import { CompanyDetailComponent } from "./pages/company-detail/company-detail.component";

const routes: Routes = [
  { path: "", component: JobFeedComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "vacature/:_id",
    component: JobDetailComponent
  },
  {
    path: ":_id",
    component: CompanyDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "disabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
