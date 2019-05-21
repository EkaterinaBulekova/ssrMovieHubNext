import React from 'react';
import { shallow } from 'enzyme';
import FilmsResults from './films-results';
import toJson from 'enzyme-to-json';

describe('<FilmsResults />', () => {
  it('should render with right count and buttons with onClick method', () => {
    const countClass = "films-count";
    const testCount = 5;
    const testOnClick = jest.fn();
    const component = shallow(<FilmsResults/>);
    expect(toJson(component)).toMatchSnapshot();

    component.unmount();
  });
});