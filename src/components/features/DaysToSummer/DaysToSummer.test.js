import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const mockProps = {
  title: 'days to summer!',
};
  
describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};
  
const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`);
  
    const component = shallow(<DaysToSummer {...mockProps}/>);
    const renderedDays = component.find('.title').text();
    expect(renderedDays).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('2019-06-28', '');
  checkDescriptionAtDate('2019-07-07', '');
  
  checkDescriptionAtDate('2019-09-24', '271 days to summer!');
  checkDescriptionAtDate('2019-11-11', '223 days to summer!');
  
  checkDescriptionAtDate('2019-06-19', '2 days to summer!');
  checkDescriptionAtDate('2019-06-20', '1 day to summer!');
});