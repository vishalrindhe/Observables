import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myObeservable = new Observable(observable => {
    console.log(observable);
    observable.next('1')
    observable.next('2')
    observable.next('3')
    observable.next('4')
    observable.next('5')
    
  })
  constructor() { }

  ngOnInit(): void {
    this.myObeservable.subscribe(next => {
      console.log(next);
    }, error => {
      console.log(error);
    }
    )
  }

}
