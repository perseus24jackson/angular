import { Component } from '@angular/core';
import { Student } from './student/student';
import { Faculty } from './faculty/faculty';
@Component({
selector: 'app-root',
imports: [Student,Faculty],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
protected title = 'EXP-2-Components';
}