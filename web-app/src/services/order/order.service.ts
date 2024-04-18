import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private http = inject(HttpClient);

  getOrder(companyId: number): Observable<Order[]> {
    return this.http.get<any>(`/api/order/${companyId}`);
  }
}
