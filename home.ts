import { Component, EventEmitter, Output } from '@angular/core';

@Component({
selector: 'app-home',
standalone: true,
imports: [],
templateUrl: './home.html',
styleUrl: './home.css'
})
export class Home {
  @Output() 
  goToApplicant = new EventEmitter<void>();
  @Output() 
  goToRecruiter = new EventEmitter<void>();
}