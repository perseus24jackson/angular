import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

10

@Component({
selector: 'app-student',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './student.html',
styleUrls: ['./student.css']
})
export class Student {
registerStudent() {
alert('Student registration submitted!');
}
}