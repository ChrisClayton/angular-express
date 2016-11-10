import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ADD_FEED, REMOVE_FEED } from '../store/feed/feed.actions';
import { Observable } from 'rxjs';

// import {FeedService} from './feed.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  loading: Boolean;
  form: FormGroup;

  feeds$: Observable<{}>;

  constructor(public fb: FormBuilder, public store: Store<{}>) {

    // this.feeds = {};
    this.feeds$ = store.select('feed');

    this.form = fb.group({
      text: ['', Validators.required],
      // name: ['', Validators.required]
      name: 'bob'
    });
  }

  ngOnInit() {
    //todo
  }

  submitFeed(): void {

    if (this.form.valid) {
      this.loading = true;

      this.store.dispatch({
        type: ADD_FEED,
        payload: this.form.value
      });

      
      setTimeout(() => {
             this.form.reset();
             this.loading = false;
         }, 3000);
    }
  }

  removeFeed(feed: {}): void {

    this.store.dispatch({
      type: REMOVE_FEED,
      payload: feed
    });

  }
}
