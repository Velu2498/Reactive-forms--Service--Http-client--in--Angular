import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-com3',
  templateUrl: './com3.component.html',
  styleUrls: ['./com3.component.css']
})
export class Com3Component implements OnInit {
  @Input() price;
  @Input() color;
  @Input() pay;
  @Input() trf;
  @Input() currency;

  constructor() { }

  ngOnInit() {
  }
  
//array for cards
cards=[
  {
    period:"monthly",
    border:"danger",
    price:"20000",
    currency:"$"
  },
  {
    period:"weekly",
    border:"warning",
    price:"5000",
    currency:"INR"
  },
  {
    period:"daily",
    border:"success",
    price:"10000",
    currency:"EURO",
    trf:true
  },
  {
    period:"monthly",
    border:"danger",
    price:"220000",
    currency:"$"
  },
  {
    period:"yearly",
    border:"primary",
    price:"50000",
    currency:"INR"
  }
]
//function to add cards
addcard(){
  let card={
    period:"yearly",
    border:"primary",
    price:"50000",
    currency:"INR"
  }
  this.cards.push(card)
}

}
