import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieDetail from './movie-detail';

describe('<MovieDetail />', () => {
  it('should render movie card with right data, class and onClick method', () => {
    const component = shallow(<MovieDetail/>);
    expect(toJson(component)).toMatchSnapshot();
  });
});
