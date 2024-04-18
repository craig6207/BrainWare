import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrdersFacade } from 'src/+state/orders.facade';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'web-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ordersFacade = inject(OrdersFacade);
  year = new Date().getFullYear();
}
