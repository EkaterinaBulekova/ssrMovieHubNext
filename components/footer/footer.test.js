import React from 'react';
import { describe, it, expect } from 'jest';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppFooter from './footer';

describe('<Footer />', () => {
  it('should render footer', () => {
    const component = shallow(<AppFooter/>);
    expect(toJson(component)).toMatchSnapshot();
  });
});
