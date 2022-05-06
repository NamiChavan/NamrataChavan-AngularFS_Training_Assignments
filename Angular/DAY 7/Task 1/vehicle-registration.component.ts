import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.css']
})
export class VehicleRegistrationComponent implements OnInit {


  customerForm:FormGroup = new FormGroup({
    ownerName : new FormControl("", Validators.required),
    ContactNumber : new FormControl("", [Validators.required, Validators.pattern("\\d{10}")]),
    OwnersEmail : new FormControl("", [Validators.required, Validators.email]),
    VehicleRegistrationNumber : new FormControl("", Validators.pattern("[A-Z]+[A-Z]+[0-9]+[A-Z]+[A-Z]+[0-9]+$")),
    Address : new FormControl("", Validators.required),
    Model : new FormControl("", [Validators.minLength(10), Validators.maxLength(10)]),
    colour : new FormControl("", Validators.required),
    year : new FormControl("", [Validators.min(2012), Validators.max(2022)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  public submit_click():void
  {
      // ajax call to send data to server
      alert("Customer Details are registered.");
     
  }
}
