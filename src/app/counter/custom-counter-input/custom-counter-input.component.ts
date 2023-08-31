import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CounterState } from "src/app/counter/state/counter.state";
import { customIncrement } from "src/app/counter/state/counter.actions";

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value = 0;

  constructor(private store: Store<{ counter: CounterState}>) {
  }

  ngOnInit() {
  }

  onAdd() {
    this.store.dispatch(customIncrement({value: +this.value}));
  }
}
