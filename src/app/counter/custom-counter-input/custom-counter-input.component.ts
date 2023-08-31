import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CounterState } from "src/app/counter/state/counter.state";
import { changeChannelName, customIncrement } from "src/app/counter/state/counter.actions";
import { getChannelName } from "src/app/counter/state/counter.selectors";
import { Observable } from "rxjs";

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value = 0;
  channelName = '';

  channelName$: Observable<string>;

  constructor(private store: Store<{ counter: CounterState}>) {
  }

  ngOnInit() {
    this.channelName$ = this.store.select(getChannelName);
    // this.store.select(getChannelName).subscribe(channelName => {
    //   console.log("aaa");
    //   this.channelName = channelName
    // })
  }

  onAdd() {
    this.store.dispatch(customIncrement({value: +this.value}));
  }

  changeText() {
    this.store.dispatch(changeChannelName());
  }
}
