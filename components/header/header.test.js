import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './header';

describe('<Header />', () => {
  it('should render header', () => {
    const component = shallow(<Header/>);
    expect(toJson(component)).toMatchSnapshot();
  });
});
