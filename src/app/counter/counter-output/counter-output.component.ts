import { CounterState } from './../state/counter.state';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter:number;
  counterSub:Subscription;


  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    this.counterSub = this.store.select('counter').subscribe ((data)=>{
        this.counter=data.counter;
    });
  }

  ngOnDestroy(){
    if(this.counterSub){
      this.counterSub.unsubscribe();
    }
  }
}
