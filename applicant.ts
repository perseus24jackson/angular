import { Component ,EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
selector: 'app-applicant',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './applicant.html',
styleUrls: ['./applicant.css']
})
export class Applicant { submitted = false;
  fullName = '';
  position = '';
  experience = '';
  department = '';
  location = '';
  contact = '';
  registerApplicant() {
  this.submitted = true;
  }
}