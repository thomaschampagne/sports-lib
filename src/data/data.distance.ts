import { DataNumber } from './data.number';

export class DataDistance extends DataNumber {
  static type = 'Distance';
  static unit = 'm';

  getDisplayValue() {
    return this.getValue() >= 1000 ? (this.getValue() / 1000).toFixed(2) : this.getValue().toFixed(1);
  }

  getDisplayUnit(): string {
    return this.getValue() >= 1000 ? 'Km' : 'm';
  }
}

export class DataDistanceMiles extends DataDistance {
  static type = 'Distance in miles';
  static unit = 'M';
}
