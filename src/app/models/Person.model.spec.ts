import { Person } from './Person.model';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person()).toBeTruthy();
  });
});
