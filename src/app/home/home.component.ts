import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pizza = 'assets/images/pizza.jpg';
  restaurant = 'assets/images/restaurant.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
