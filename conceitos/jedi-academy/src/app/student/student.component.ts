import { Component, OnInit, Input } from '@angular/core';

import { Student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;

  constructor() {
    this.student = {
      name: "",
      isJedi: false
    };
  }

  ngOnInit(): void { }

  sayMayTheForceBeWithYou(event: Event): void {
    console.log(`Event: ${event}`);
    alert("May the force be with you!");
  }

}
