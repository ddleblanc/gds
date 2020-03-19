import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobFeedComponent } from "./pages/job-feed/job-feed.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { JobDetailComponent } from "./pages/job-detail/job-detail.component";

const routes: Routes = [
  { path: "", component: JobFeedComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "vacature/:_id",
    component: JobDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "disabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
