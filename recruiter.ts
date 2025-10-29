import { Component,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
selector: 'app-recruiter',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './recruiter.html',
styleUrl: './recruiter.css'
})
export class Recruiter {
submitted = false;
// Form fields
fullName = '';
position = '';
experience = '';
department = '';
location = '';
contact = '';
registerRecruiter() {
this.submitted = true;
}
}