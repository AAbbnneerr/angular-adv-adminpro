import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notpagefound',
  templateUrl: './notpagefound.component.html',
  styleUrls: [
    './notpagefount.component.css'
  ]
})
export class NotpagefoundComponent implements OnInit {

   public year = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
