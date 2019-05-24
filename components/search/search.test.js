import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from './search';

describe('<Search />', () => {
  it('should render as expect', () => {
    const component = shallow(<Search/>);
    expect(toJson(component)).toMatchSnapshot();
  });
});
