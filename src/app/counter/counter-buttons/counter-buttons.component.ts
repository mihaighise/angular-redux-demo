import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { decrement, increment, reset } from "../state/counter.actions";
import { CounterState } from "src/app/counter/state/counter.state";

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit{

  constructor(private store: Store<{counter: CounterState}>) {
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
