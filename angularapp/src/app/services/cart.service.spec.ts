import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService]
    });

    service = TestBed.inject(CartService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  
  // fit('Frontend_should_remove_gifts_from_cart_when_removeGiftsFromCart_is_called', () => {
  //   const cartDetails = {
  //     cartId: '1',
  //   };
  //   const giftId = '1';
  
  //   (service as any).removeGiftsFromCart(cartDetails, giftId).subscribe();
  //   const req = httpMock.expectOne(`${(service as any).apiUrl}/api/cart/${cartDetails.cartId}?giftId=${giftId}`);
  //   expect(req.request.method).toBe('DELETE');
  //   expect(req.request.headers.get('Authorization')).toBeTruthy();
  // });
  
  fit('Frontend_should_get_all_gifts_from_cart_when_getAllGiftsFromCart_is_called', () => {
    (service as any).getAllGiftsFromCart().subscribe((gifts) => {
      expect(gifts).toBeTruthy();
    });
  
    const customerId = localStorage.getItem('customerId');
    const req = httpMock.expectOne(`${(service as any).apiUrl}/api/cart/customer/${customerId}`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBeTruthy();
  });

});