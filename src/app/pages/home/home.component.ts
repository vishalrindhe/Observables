import { Component, OnInit } from '@angular/core';
import { Observable, from, map, filter, of, BehaviorSubject, fromEvent, combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  f1 = (value:any) => {
    return value
  } 
  userName = new BehaviorSubject<{id:number,name:string} |null>(null)
  numArray = [
    {id : 1, name : 'vishal', isActive : true},  
    {id : 2, name : 'viraj', isActive : false},  
    {id : 3, name : 'vikas', isActive : false},  
    {id : 4, name : 'vaishag', isActive : true} 
  ]
  clickOnDOM = fromEvent(document,'click')
  myObeservable :any = of(this.numArray).pipe(
    // map((r:any) => r.map((rr:any) => rr)),
    filter((r:any) => r.filter((rr:any) => rr.isActive)
    // {
    //   console.log(r.filter((rr:any) => rr.isActive));
      
    //   return r.filter((rr:any) => rr.isActive)
    //   console.log(r.every((rr:any) => rr.isActive));
      
    //   return r.every((rr:any) => rr.isActive)
    // }
    )
  )

  allData = combineLatest([this.myObeservable,this.userName]).pipe(
    map(([myObservable,userName]:any) =>({
      myObservable,userName
    }))
  )
  ngOnInit(): void {
    this.allData.subscribe(rr=>{
      console.log(rr);
      
    })
    this.myObeservable.subscribe((next:any) => {
      console.log(next);
    }, (error:any) => {
      console.error(error);
    }, () => {
      console.log('completed');
      
    }
    )
    setTimeout(() => {this.userName.next({id:1,name:'abc'}) }, 3000);
      this.clickOnDOM.subscribe(rr => {
        console.log(rr);
        
      })
  }

}
