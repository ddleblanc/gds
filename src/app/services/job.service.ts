import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class JobService {
  private currentPhoneNumber = new Subject<string>();
  //Set current Post's photo url
  setCurrentPhoneNumber(phoneNumber: string) {
    this.currentPhoneNumber.next(phoneNumber);
  }

  currentPhoneNumber$ = this.currentPhoneNumber.asObservable();

  constructor() {}
}
