import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,        // Optional, but recommended for standalone setup
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  // Fixed typo and array format
})
export class App {
  protected title = 'EXP-4';
}
