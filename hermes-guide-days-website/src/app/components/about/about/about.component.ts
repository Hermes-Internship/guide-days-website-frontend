import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

export class Event {
  constructor(
    public idEvent: number,
    public eventName: string,
    public eventDescription: string,
    public eventStartDate: Date,
    public eventEndDate: Date,
    public eventLocation: string
  ) {}
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();

  currentDate = Date();

  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference = 0;
  public minutesToStart = 0;
  public hoursToStart = 0;
  public daysToStart = 0;

  events: Event[] = [];

  private url = 'src/assets/data/event.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //this.getEvents();
    this.events.push(
      new Event(
        4,
        'Guide Days',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci risus, varius at sem sed, rhoncus commodo mauris. Etiam et ullamcorper nunc, eu convallis metus. Curabitur efficitur et quam at varius.',
        new Date('2021-08-10'),
        new Date('2019-01-16'),
        'locatie'
      )
    );
    console.log(this.events);
    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
    });
  }

  getEvents() {
    this.http.get<Event[]>(this.url).subscribe((response) => {
      console.log(response);
      this.events = response;
    });
  }

  private getTimeDifference() {
    this.timeDifference =
      this.events[0].eventStartDate.getTime() - new Date().getTime();
    this.allocateTimeUnits();
  }

  private allocateTimeUnits() {
    this.minutesToStart = Math.floor(
      (this.timeDifference /
        (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.SecondsInAMinute
    );
    this.hoursToStart = Math.floor(
      (this.timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute)) %
        this.hoursInADay
    );
    this.daysToStart = Math.floor(
      this.timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute *
          this.hoursInADay)
    );
  }

  ngOnDestroy() {
    // Unsubscribed the subscription
    this.subscription.unsubscribe();
  }
}
