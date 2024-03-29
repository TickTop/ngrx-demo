import { getCounter } from './../state/counter.selectors';
import { CounterState } from './../state/counter.state';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{

  counter$:Observable <number>;
  constructor(private store:Store<{counter:CounterState}>) { }
  
  ngOnInit(): void {
   // this.counter$ = this.store.select ('counter'); 
   this.counter$ = this.store.select(getCounter);
 
   }
  
 
}
