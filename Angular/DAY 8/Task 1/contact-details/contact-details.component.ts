import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

ContactNo:string="20-1234567890";
Email:string="beautyproduct@gmail.com";
Website:string="www.beautyproduct.com"



  constructor() { }

  ngOnInit(): void {
  }

}
