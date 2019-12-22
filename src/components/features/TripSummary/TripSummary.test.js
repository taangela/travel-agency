import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', ()=> {
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='sunrise' cost='500' days={7} tags={['beach','spa']}/>);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('img should have correct src and alt', ()=>{
    const expectedSrc = 'image.jpg';
    const expectedAlt ='sunrise';
    const component = shallow(<TripSummary id='abc' image={expectedSrc} name={expectedAlt} cost='500' days={7} tags={['beach','spa']}/>);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('correct render props: name, cost, days', ()=>{
    const expectedName = 'sunrise';
    const expectedCost = 'from 500';
    const expectedDays = '7 days';
    const component = shallow(<TripSummary id='abc' image='image.jpg' name={expectedName} cost='500' days={7} tags={['beach','spa']}/>);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').childAt(0).text()).toEqual(expectedDays);
    expect(component.find('.details').childAt(1).text()).toEqual(expectedCost);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render span for each tag in correct order', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='sunrise' cost='500' days={7} tags={['beach','spa','pool']}/>);

    const expectedTag1 = 'beach';
    const expectedTag2 = 'spa';
    const expectedTag3 = 'pool';
    expect(component.find('.tag').at(0).text()).toEqual(expectedTag1);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTag2);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTag3);
  });

  it('should not render tags div if tags prop is falsy', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='sunrise' cost='500' days={7}/>);
    expect(component.find('.tags').exists()).toEqual(false);
  });
});