import { changeChannelName } from './../state/counter.actions';
import { getChannelName } from './../state/counter.selectors';
import { Observable } from 'rxjs';
import { CounterState } from './../state/counter.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value:number;
  channelName$:Observable<string>;
  constructor(private store: Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
   
  }
  onAdd() {
    this.store.dispatch (customIncrement ({count:+this.value}));
  }
  onChangeChannelName(){
    this.store.dispatch(changeChannelName());
  }

}
