  import { Component, OnInit } from '@angular/core';
  import { OrderService } from 'src/app/services/order.service';
  import { CustomerService } from 'src/app/services/customer.service';
  import { GiftService } from 'src/app/services/gift.service';

  @Component({
    selector: 'app-my-orders',
    templateUrl: './my-orders.component.html',
    styleUrls: ['./my-orders.component.css']
  })
  export class MyOrdersComponent implements OnInit {
    orders = [];
    customers = {};

    constructor(private orderService: OrderService, private customerService: CustomerService, private giftService:GiftService) { }

    ngOnInit(): void {
      this.viewOrderByUserId();
    }

    // viewOrderByUserId() {
    //   this.orderService.viewOrderByUserId().subscribe(
    //     response => {
    //       console.log(response);
    //       this.orders = response.$values;
    //     },
    //     error => {
    //       console.error(error);
    //     }
    //   );
    // }
    viewOrderByUserId() {
      this.orderService.viewOrderByUserId().subscribe(
        response => {
          console.log(response);
          this.orders = response.$values;
          this.orders.forEach(order => {
            if (order.gifts && order.gifts.$values) {
              order.gifts = order.gifts.$values;
              
            } else {
              console.error('order.gifts.$values is not defined:', order.gifts);
            }
          });
        },
        error => {
          console.error(error);
        }
      );
    }
  }
