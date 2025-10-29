import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css']  // <-- fixed typo here: styleUrls (plural)
})
export class Home {
  constructor(private router: Router) {}

  goToProducts() {
    this.router.navigate(['/products']);
  }

  goToOrder() {
    this.router.navigate(['/order']);
  }
}
