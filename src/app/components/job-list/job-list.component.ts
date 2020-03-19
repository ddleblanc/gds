import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { Router } from "@angular/router";

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ["./job-list.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("500ms ease-in-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("500ms", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class JobListComponent implements OnInit {
  jobs = [
    {
      _id: "0",
      title: "Full Stack Mobile app Developer",
      type: "Full Time",
      postedOn: Date.now(),
      companyName: "Ramotion",
      companyLogo:
        "https://www.want.nl/wp-content/uploads/2019/05/google-logo.jpg",
      location: { city: "Breda", state: "NB" }
    },
    {
      _id: "1",
      title: "Senior Web Developer",
      type: "Freelance",
      postedOn: Date.now(),
      companyName: "Focus Lab",
      companyLogo:
        "https://storage.googleapis.com/webdesignledger.pub.network/WDL/12f213e1-t1.jpg",
      location: { city: "Rotterdam", state: "ZH" }
    },
    {
      _id: "2",
      title: "Magazijn Medewerker",
      type: "Part Time",
      postedOn: Date.now(),
      companyName: "Jumbo",
      companyLogo:
        "https://actief65plus.bladecdn.net/wp-content/uploads/2019/04/jumbo-logo.jpg",
      location: { city: "Den Haag", state: "ZH" }
    },
    {
      _id: "3",
      title: "Full Stack Mobile app Developer",
      type: "Full Time",
      postedOn: Date.now(),
      companyName: "Ramotion",
      companyLogo:
        "https://cdn2.vectorstock.com/i/1000x1000/24/01/letter-s-creative-premium-logo-design-vector-15362401.jpg",
      location: { city: "Breda", state: "NB" }
    },
    {
      _id: "4",
      title: "Senior Web Developer",
      type: "Freelance",
      postedOn: Date.now(),
      companyName: "Focus Lab",
      companyLogo:
        "https://designcontest3-com-designcontest.netdna-ssl.com/data/contests/135931/entries/big_d4a1264168c85e32.png",
      location: { city: "Rotterdam", state: "ZH" }
    },
    {
      _id: "5",
      title: "Magazijn Medewerker",
      type: "Part Time",
      postedOn: Date.now(),
      companyName: "Jumbo",
      companyLogo:
        "https://actief65plus.bladecdn.net/wp-content/uploads/2019/04/jumbo-logo.jpg",
      location: { city: "Den Haag", state: "ZH" }
    },
    {
      _id: "6",
      title: "Full Stack Mobile app Developer",
      type: "Full Time",
      postedOn: Date.now(),
      companyName: "Ramotion",
      companyLogo:
        "https://cdn2.vectorstock.com/i/1000x1000/24/01/letter-s-creative-premium-logo-design-vector-15362401.jpg",
      location: { city: "Breda", state: "NB" }
    },
    {
      _id: "7",
      title: "Senior Web Developer",
      type: "Freelance",
      postedOn: Date.now(),
      companyName: "Focus Lab",
      companyLogo:
        "https://designcontest3-com-designcontest.netdna-ssl.com/data/contests/135931/entries/big_d4a1264168c85e32.png",
      location: { city: "Rotterdam", state: "ZH" }
    },
    {
      _id: "8",
      title: "Magazijn Medewerker",
      type: "Part Time",
      postedOn: Date.now(),
      companyName: "Jumbo",
      companyLogo:
        "https://actief65plus.bladecdn.net/wp-content/uploads/2019/04/jumbo-logo.jpg",
      location: { city: "Den Haag", state: "ZH" }
    },
    {
      _id: "9",
      title: "Full Stack Mobile app Developer",
      type: "Full Time",
      postedOn: Date.now(),
      companyName: "Ramotion",
      companyLogo:
        "https://cdn2.vectorstock.com/i/1000x1000/24/01/letter-s-creative-premium-logo-design-vector-15362401.jpg",
      location: { city: "Breda", state: "NB" }
    },
    {
      _id: "10",
      title: "Senior Web Developer",
      type: "Freelance",
      postedOn: Date.now(),
      companyName: "Focus Lab",
      companyLogo:
        "https://designcontest3-com-designcontest.netdna-ssl.com/data/contests/135931/entries/big_d4a1264168c85e32.png",
      location: { city: "Rotterdam", state: "ZH" }
    },
    {
      _id: "11",
      title: "Magazijn Medewerker",
      type: "Part Time",
      postedOn: Date.now(),
      companyName: "Jumbo",
      companyLogo:
        "https://actief65plus.bladecdn.net/wp-content/uploads/2019/04/jumbo-logo.jpg",
      location: { city: "Den Haag", state: "ZH" }
    },
    {
      _id: "12",
      title: "Full Stack Mobile app Developer",
      type: "Full Time",
      postedOn: Date.now(),
      companyName: "Ramotion",
      companyLogo:
        "https://cdn2.vectorstock.com/i/1000x1000/24/01/letter-s-creative-premium-logo-design-vector-15362401.jpg",
      location: { city: "Breda", state: "NB" }
    },
    {
      _id: "13",
      title: "Senior Web Developer",
      type: "Freelance",
      postedOn: Date.now(),
      companyName: "Focus Lab",
      companyLogo:
        "https://designcontest3-com-designcontest.netdna-ssl.com/data/contests/135931/entries/big_d4a1264168c85e32.png",
      location: { city: "Rotterdam", state: "ZH" }
    },
    {
      _id: "14",
      title: "Magazijn Medewerker",
      type: "Part Time",
      postedOn: Date.now(),
      companyName: "Jumbo",
      companyLogo:
        "https://actief65plus.bladecdn.net/wp-content/uploads/2019/04/jumbo-logo.jpg",
      location: { city: "Den Haag", state: "ZH" }
    },
    {
      _id: "15",
      title: "Full Stack Mobile app Developer",
      type: "Full Time",
      postedOn: Date.now(),
      companyName: "Ramotion",
      companyLogo:
        "https://cdn2.vectorstock.com/i/1000x1000/24/01/letter-s-creative-premium-logo-design-vector-15362401.jpg",
      location: { city: "Breda", state: "NB" }
    },
    {
      _id: "16",
      title: "Senior Web Developer",
      type: "Freelance",
      postedOn: Date.now(),
      companyName: "Focus Lab",
      companyLogo:
        "https://designcontest3-com-designcontest.netdna-ssl.com/data/contests/135931/entries/big_d4a1264168c85e32.png",
      location: { city: "Rotterdam", state: "ZH" }
    },
    {
      _id: "17",
      title: "Magazijn Medewerker",
      type: "Part Time",
      postedOn: Date.now(),
      companyName: "Jumbo",
      companyLogo:
        "https://actief65plus.bladecdn.net/wp-content/uploads/2019/04/jumbo-logo.jpg",
      location: { city: "Den Haag", state: "ZH" }
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}
  navigateTo(_id) {
    this.router.navigate(["vacature", _id]);
  }
}
