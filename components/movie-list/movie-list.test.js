import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieList from './movie-list';

describe('<MovieList />', () => {
  it('should render list of movie card with right title, class and metod', () => {
    const component = shallow(<MovieList/>);
    expect(toJson(component)).toMatchSnapshot();
  });
});
