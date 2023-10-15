import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myObeservable =  of([1,2,3,4,5,6],['a','b','c'])
  // myObeservable = from([1,2,3,4,5,6])
  // myObeservable = new Observable(observable => {
  //   observable.next('1')
  //   // observable.error('error occured message')
  //   observable.complete()
  //   observable.next('1')
  //   observable.error('error occured message')
  // })
  // myObeservable = Observable.create((observable:any) => {
  //   observable.next('1')
  //   // observable.error('error occured message')
  //   observable.complete()
  //   observable.next('1')
  //   observable.error('error occured message')
  // })
    

  ngOnInit(): void {
    this.myObeservable.subscribe((next:any) => {
      console.log(next);
    }, (error:any) => {
      console.error(error);
    }, () => {
      console.log('completed');
      
    }
    )
  }

}
