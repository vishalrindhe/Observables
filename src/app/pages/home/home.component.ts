import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myObeservable = new Observable(observable => {
    observable.next('1')
    // observable.error('error occured message')
    observable.complete()
    observable.next('1')
    observable.error('error occured message')
  })
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
