import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  orders: any;
  message: string = '';

  constructor(private orderService: OrderService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.viewAllOrders();
  }
  viewAllOrders() {
    // this.orderService.viewAllOrders().subscribe((response: any) => {
    //   this.orders = response;
    //   console.log(this.orders);
    //   if (this.orders.length === 0) {
    //     this.message = 'No orders placed';
    //   } else {
    //     this.message = '';
    //   }
    // }, error => {
    //   console.error('Error:', error);
    // });
    // this.orderService.viewAllOrders().subscribe((response: any) => {
    //   this.orders = Array.isArray(response) ? response : Object.values(response);
    //   console.log(this.orders);
    //   if (this.orders.length === 0) {
    //     this.message = 'No orders placed';
    //   } else {
    //     this.message = '';
    //   }
    // }, error => {
    //   console.error('Error:', error);
    // });
    // this.orderService.viewAllOrders().subscribe((response: any) => {
    //   console.log(response);
    //   this.orders = response;
    //   console.log(this.orders);
    //   if (!this.orders || this.orders.length === 0) {
    //     this.message = 'No orders placed';
    //   } else {
    //     this.message = '';
    //   }
    // }, error => {
    //   console.error('Error:', error);
    // });
    // this.orderService.viewAllOrders().subscribe((response: any) => {
    //   console.log(response);
    //   this.orders = response.$values;
    //   console.log(this.orders);
    //   if (!this.orders || this.orders.length === 0) {
    //     this.message = 'No orders placed';
    //   } else {
    //     this.message = '';
    //   }
    // }, error => {
    //   console.error('Error:', error);
    // });
    // this.orderService.viewAllOrders().subscribe((response: any) => {
    //   console.log(response);
    //   if (response.$values && Array.isArray(response.$values)) {
    //     this.orders = response.$values;
    //   } else if (response.$values && typeof response.$values === 'object') {
    //     this.orders = Object.values(response.$values);
    //   } else {
    //     this.orders = [];
    //   }
    //   console.log(this.orders);
    //   if (!this.orders || this.orders.length === 0) {
    //     this.message = 'No orders placed';
    //   } else {
    //     this.message = '';
    //   }
    // }, error => {
    //   console.error('Error:', error);
    // });
  //   

  
  
