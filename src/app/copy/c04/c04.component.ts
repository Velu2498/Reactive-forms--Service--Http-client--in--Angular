import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-com4',
  templateUrl: './com4.component.html',
  styleUrls: ['./com4.component.css']
})
export class Com4Component implements OnInit {
  cards;
  constructor(private http:HttpClient) { 
    http.get("https://5cdd0a92b22718001417c19d.mockapi.io/api/products")
    .subscribe((data)=>{
      this.cards=data
    })
  }

  ngOnInit() {
  }

  //array
// cards=[
//     {
//       picture:"",
//       Name:"Black t-shirt",
//       price:"20000",
//       Rating:"****"
//     },
//     {
//       picture:"",
//       Name:"White shirt",
//       price:"5000",
//       Rating:"*****"
//     },
//     {
//       picture:"",
//       Name:"Woody",
//       price:"10000",
//       Rating:"****",
//       trf:true
//     },
//     {
//       picture:"",
//       Name:"Black t-shirt",
//       price:"220000",
//       Rating:"***"
//     },
//     {
//       picture:"",
//       Name:"Blazer",
//       price:"50000",
//       Rating:"****"
//     }
//   ]

}
