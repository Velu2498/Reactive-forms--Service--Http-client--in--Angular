import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DadaserviceService {
  static list: any;

  constructor() { }

  list=[
    {
      name:"velu",
      age:21,
    }
  ]
}
