import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      fname: [],
      lname: []
    })
  }

  Register() {
    localStorage.setItem('NAME', this.registerForm.value.fname + this.registerForm.value.lname);
  }

}
