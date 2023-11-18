import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-customer',
  templateUrl: './last-customer.component.html',
  styleUrls: ['./last-customer.component.scss']
})
export class LastCustomerComponent implements OnInit {

  users = [
    {
      avatar: 'assets/img/dashboard/last-user/Avatar.png',
      name: 'Neil Sims',
      email: 'Neil@gmail.com',
      total_buy: '367'
    },
    {
      avatar: 'assets/img/dashboard/last-user/Avatar.png',
      name: 'Neil Sims',
      email: 'Neil@gmail.com',
      total_buy: '367'
    },
    {
      avatar: 'assets/img/dashboard/last-user/Avatar.png',
      name: 'Neil Sims',
      email: 'Neil@gmail.com',
      total_buy: '367'
    },
    {
      avatar: 'assets/img/dashboard/last-user/Avatar.png',
      name: 'Neil Sims',
      email: 'Neil@gmail.com',
      total_buy: '367'
    },
    {
      avatar: 'assets/img/dashboard/last-user/Avatar.png',
      name: 'Neil Sims',
      email: 'Neil@gmail.com',
      total_buy: '367'
    },
    {
      avatar: 'assets/img/dashboard/last-user/Avatar.png',
      name: 'Neil Sims',
      email: 'Neil@gmail.com',
      total_buy: '367'
    },
  ];

  ngOnInit(): void {
  }

}
