import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchFilter from './search-filter';

describe('<SearchFilter />', () => {
  it('should render buttons with onClick method', () => {
    const component = shallow(<SearchFilter/>);
    expect(toJson(component)).toMatchSnapshot();
  });
});
