import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  async navigateToPosts() {
    await this.router.navigateByUrl('posts');
  }
}
