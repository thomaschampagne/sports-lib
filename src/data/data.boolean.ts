import { DataBare } from './data.bare';

export abstract class DataBoolean extends DataBare {
  constructor(value: boolean) {
    super(value);
  }

  isValueTypeValid(value: any): boolean {
    return typeof value === 'boolean';
  }
}
