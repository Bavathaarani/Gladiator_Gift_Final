import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { OrderService } from "./order.service";

describe("OrderService", () => {
  let service: OrderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderService],
    });

    service = TestBed.inject(OrderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding requests
  });

  fit("frontend_should_add_an_order_when_addOrder_is_called", () => {
    const order = {
      orderId: 1,
      orderPrice: 100,
      quantity: 1,
    };
    const response = { id: "1", ...order };
    (service as any).addOrder(order).subscribe();
    const req = httpMock.expectOne(`${(service as any).apiUrl}/api/order`);
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(order);
    req.flush(response);
  });

  fit("frontend_should_retrieve_all_orders_when_viewAllOrders_is_called", () => {
    const orders = [
      { orderId: 1, orderPrice: 100, quantity: 1 },
      { orderId: 2, orderPrice: 200, quantity: 2 },
    ];
    (service as any).viewAllOrders().subscribe();
    const req = httpMock.expectOne(`${(service as any).apiUrl}/api/order`);
    expect(req.request.method).toBe("GET");
    req.flush(orders);
  });
});
