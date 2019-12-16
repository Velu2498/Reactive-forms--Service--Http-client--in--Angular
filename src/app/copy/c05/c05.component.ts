import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { DadaserviceService } from '../dadaservice.service';

@Component({
  selector: 'app-com5',
  templateUrl: './com5.component.html',
  styleUrls: ['./com5.component.css']
})
export class Com5Component implements OnInit {

  constructor(public b:DadaserviceService ) { }

  ngOnInit() {
  }

  form = new FormGroup({
    Name: new FormControl(''),
    age: new FormControl(''),
    country: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  

  fun(){
    console.log(this.form.value)
    this.b.list.push(this.form.value)
    console.log(this.b.list)
  }

}
