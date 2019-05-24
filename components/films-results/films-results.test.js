import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FilmsResults from './films-results';

describe('<FilmsResults />', () => {
  it('should render with right count and buttons with onClick method', () => {
    const component = shallow(<FilmsResults/>);
    expect(toJson(component)).toMatchSnapshot();

    component.unmount();
  });
});
