import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { JobService } from "src/app/services/job.service";

@Component({
  selector: "app-job-detail",
  templateUrl: "./job-detail.component.html",
  styleUrls: ["./job-detail.component.scss"],
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
    ]),
    trigger("textEnterAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(10px)" }),
        animate(
          "500ms 200ms ease-in-out",
          style({ opacity: 1, transform: "translateY(0px)" })
        )
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("500ms", style({ opacity: 0 }))
      ])
    ]),
    trigger("bottomNavAnimation", [
      transition(":enter", [
        style({ transform: "translateY(100%)" }),
        animate(
          "500ms 600ms ease-in-out",
          style({ transform: "translateY(0%)" })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateY(0%)" }),
        animate("500ms ease-in-out", style({ transform: "translateY(100%)" }))
      ])
    ])
  ]
})
export class JobDetailComponent implements OnInit {
  panelOpenState = false;
  vacature = {
    contact: {
      title: "Adres- en contactgegevens",
      name: "Onlinepets B.V.",
      street: "Emmerblok 1",
      postcode: "4751 XE",
      city: "Oud Gastel",
      phone: "0186 - 210015",
      email: "vacature@medpets.nl"
    },
    text: [
      {
        subject: "Over ons bedrijf:",
        paragraphs: [
          "Medpets is een snel groeiend e-commerce bedrijf gevestigd in Oud Gastel (in de buurt van Breda, Roosendaal en Rotterdam) dat al twee jaar op rij in de Top 250 Groeibedrijven van Nederland staat. Via de webshops Medpets.nl, Medpets.be, Medpets.de, Vetsend.co.uk en Medpets.fr verkopen wij geneesmiddelen, supplementen, voer en benodigdheden voor huisdieren aan respectievelijk Nederlandse, Belgische, Duitse, Britse en Franse consumenten.",
          "Vanuit Oud Gastel (Noord-Brabant) werken we met 100 collega’s die zich bezig houden met marketing, klantenservice, web development en fulfilment. Maandelijks verlaten meer dan 90.000 pakketten ons magazijn met als eindbestemming klanten in onder andere Nederland, België, Duitsland, Oostenrijk, Verenigd Koninkrijk en Frankrijk.",
          "De afgelopen jaren heeft Medpets hard aan de weg getimmerd en dit is door onze klanten beloond. Zo won Medpets.nl in 2014 de Thuiswinkel Award Publieksprijs XS in de categorie Dieren en heeft Medpets.be in 2015 en 2017 de BeCommerce Award in de categorie Home, Garden & Animal gewonnen. Inmiddels staat Medpets op plek 88 van het middensegment van de Twinkle top 100."
        ]
      },
      {
        subject: "Functiebeschrijving:",
        paragraphs: [
          "Als Front-end Developer bij Medpets werk je aan onze eigen complexe en professionele webshop applicaties op basis van PHP. Naast projecten in het huidige platform ga je samen met het team verder aan de slag met de bouw van ons nieuwe e-commerce platform op basis van Laravel of het door ons zelf ontwikkelde front-end framework. Hierbij kunnen wij jouw hulp zeker goed gebruiken! Samen met onze vijf andere Developers bouw je mee aan de toekomst van Medpets."
        ]
      },
      {
        subject: "Een voorbeeld van hoe je dag eruit zou kunnen zien:",
        paragraphs: [
          "Als Developer bij Medpets begin je de dag tussen 8.00 en 09.30 uur met een goede kop versgemalen koffie. Je start je computer op en bekijkt waar je gisteren was gebleven. Voor de dagelijkse stand-up schrijf je nog snel een aantal nieuwe regels code in de code editor. Om 09.30 uur kom je met heel het team samen en bespreek je waar je mee bezig bent geweest en wat de voortgang is. Hierna ga je weer aan de slag met de nieuwe feature waar je aan begonnen was. Nadat je de code hebt getest op de acceptatie server, maak je een pull-request aan waarna alle IT collega’s je code kunnen reviewen. Is je nieuwe feature goedgekeurd, dan kan deze ingezet worden op de live server. Daarna bespreek je met de designer van een andere nieuwe feature de werkzaamheden en eventuele animatie flow van verschillende stappen. Klinkt als een drukke dag. Wil je tussendoor even je hoofd leeg maken? Dat kan, er zijn altijd wel collega’s in voor een potje tafelvoetbal."
        ]
      },
      {
        subject: "Profiel",
        paragraphs: [
          "Je hebt een heldere visie over hoe je bepaalde programmeer concepten moet toepassen en je kan dit ook overbrengen aan je collega’s. Ook ben je zeer gedetailleerd, met oog voor pixel perfect design. Je hebt een zorgvuldige en nette programmeerstijl en werkt zelfstandig en accuraat. Als teamplayer denk je mee over het herschrijven van bestaande integraties, functionaliteiten en bedrijfsprocessen naar een nieuwe structuur in Laravel. Je voelt je verantwoordelijk voor het succes van Medpets en werkt graag in een informele, maar doelgerichte omgeving."
        ]
      }
    ]
  };
  image =
    "https://ctfassets.imgix.net/6vy33zo2mgy3/5DGwNvbPWS8xN3T1gDxc9R/a611e35652706d09943fa6bc7342fc46/Office_Suite_-_NEW_.jpg?auto=format%20compress&fit=crop&q=50&w=1000&h=563";
  phoneNumber;
  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.setCurrentPhoneNumber(this.vacature.contact.phone);
  }
}
