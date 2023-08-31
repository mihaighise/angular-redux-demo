import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CounterState } from "src/app/counter/state/counter.state";
import { getCounter } from "src/app/counter/state/counter.selectors";
import { Observable } from "rxjs";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {

  counter$: Observable<number>

  constructor(private store: Store<{counter: CounterState}>) {
  }

  ngOnInit() {
    this.counter$ = this.store.select(getCounter);
  }
}
