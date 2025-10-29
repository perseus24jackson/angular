import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Required for *ngIf

@Component({
  selector: 'app-products',
  standalone: true, // ✅ This tells Angular it is a standalone component
  imports: [CommonModule], // ✅ Required for structural directives like *ngIf
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products{
  selectedSection: string = '';

  selectSection(section: string) {
    this.selectedSection = section;
  }
}
