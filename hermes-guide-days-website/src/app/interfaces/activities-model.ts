export class Event {
    constructor(
      private IdActivity: number,
      private activityName: string,
      public activityStartDate: string,
      public activityLocation: string
    ) {
    }
  }
  