import {Component, OnDestroy, OnInit} from '@angular/core';
import {SingleSpaProps, singleSpaPropsSubject} from "../single-spa/single-spa-props";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'micro-rod-app2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app2';


  /**
   * Get singleSpaProps
   */
  spaPropsSubscription: Subscription = null;
  foo$: Observable<string>; // BehaviorSubject do base


  // Lifecycle
  ngOnInit() {
    console.log('app2/ngOnInit');
    this.spaPropsSubscription = singleSpaPropsSubject.asObservable().subscribe(
      (props: any) => {
        console.log('spa props', props);
        this.foo$ = props.foo;
      },
      err => {
        console.error('spaPropsSubscription FAILED!', err.message)
      }
    );
  }

  ngOnDestroy() {
    this.spaPropsSubscription.unsubscribe();
  }
}
