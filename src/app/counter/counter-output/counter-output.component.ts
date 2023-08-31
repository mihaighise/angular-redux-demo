import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CounterState } from "src/app/counter/state/counter.state";
import { Observable } from "rxjs";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {

  counter$: Observable<CounterState>;
  counter = 0;

  constructor(private store: Store<{counter: CounterState}>) {
  }

  ngOnInit() {
   this.counter$ = this.store.select('counter');
   this.counter$.subscribe(value => { this.counter = value.counter });
  }
}
