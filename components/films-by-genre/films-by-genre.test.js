import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FilmsByGenre from './films-by-genre';

describe('<FilmsByGenre />', () => {
  it('should render button with right name, class and onClick method', () => {
    const component = shallow(<FilmsByGenre/>);
    expect(toJson(component)).toMatchSnapshot();
  });
});
