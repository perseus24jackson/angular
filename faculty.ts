import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

class Faculty {
  constructor(
    public photo: string,
    public name: string,
    public department: string,
    public email: string,
    public gender: string
  ) {}
}

@Component({
  selector: 'app-faculty',
  standalone: true,
  templateUrl: './faculty.html',
  styleUrls: ['./faculty.css'],
  imports: [CommonModule, FormsModule]
})
export class FacultyComponent {
  selectedDepartment = 'All';
  selectedGender = 'All';

  facultyList: Faculty[] = [
    new Faculty('assets/csehod (1).jpg', 'Dr. N. Kasiviswanath', 'CSE', 'hod.cse@gprec.ac.in', 'Male'),
    new Faculty('assets/csedean (1).png', 'Dr. C.Sreedhar', 'CSE', 'sreedhar.cse@gprec.ac.in', 'Male'),
    new Faculty('assets/Sagar (1).jpg', ' Dr.G Venkata Ramana Sagar', 'ECE', 'sagar.ece@gprec.ac.in', 'Male'),
    new Faculty('assets/swati (1).jpg', 'Dr. T.Swati', 'ECE', 'swati.ece@gprec.ac.in', 'Female'),
    new Faculty('assets/Govardhan (1).jpg', 'Dr. K.Govardhan Reddy', 'ECS', 'govardhan.ecs@gprec.ac.in', 'Male'),
    new Faculty('assets/VaraPrasadmech.png', 'Dr. B.J.S Varaprasad', 'Civil', 'varaprasad.ce@gprec.ac.in', 'Male'),
    new Faculty('assets/Civil-01.png', 'Dr.Sowjanya', 'Civil', 'sowjanaya.ce@gprec.ac.in', 'Female'),
    new Faculty('assets/RSChalapathi (1).jpg', 'Dr. R.S.Chalapathi', 'ECS', 'chalapathi.ecs@gprec.ac.in', 'Male'),
    new Faculty('assets/sivareddy.jpg', 'Dr.Y.V.Siva Reddy', 'EEE', 'sivareddy.eee@gprec.ac.in', 'Male'),
    new Faculty('assets/Mec-05.png', 'Dr. B.Veera Bhadra Reddy', 'MECH', 'veerabadhra.mech@gprec.ac.in', 'Male'),
    new Faculty('assets/eee07.png', 'Dr. V. Anantha Lakshmi', 'EEE', 'lakshmi.eee@gprec.ac.in', 'Female'),
    new Faculty('assets/Mec-19.png', 'Dr.K.Devaki Devi', 'MECH', 'chalapathi.ecs@gprec.ac.in', 'Female')

  ];

  get filteredFaculty(): Faculty[] {
    return this.facultyList.filter(f =>
      (this.selectedDepartment === 'All' || f.department === this.selectedDepartment) &&
      (this.selectedGender === 'All' || f.gender === this.selectedGender)
    );
  }
}