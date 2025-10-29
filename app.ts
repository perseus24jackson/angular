import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from "./home/home";
import {Applicant} from './applicant/applicant';
import {Recruiter} from './recruiter/recruiter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Home, Applicant, Recruiter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentView: string = 'home';

  showApplicant() {
    this.currentView='applicant';
  }
  showRecruiter() {
    this.currentView='recruiter';
  }
  showHome() {
    this.currentView='home';
  }
}

