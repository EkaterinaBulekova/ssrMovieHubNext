import React from 'react';
import {
  it, expect, describe, fn,
} from 'jest';
import { shallow } from 'enzyme';
import Button from './button';


describe('<Button />', () => {
  it('should render button with right name, class and onClick method', () => {
    const testName = 'Test name';
    const testClass = 'test-class';
    const testOnClick = fn();
    const component = shallow(<Button
      name={testName}
      className={testClass}
      onClick={testOnClick}/>);
    const button = component.find('button');

    expect(component.hasClass(testClass)).toBe(true);
    expect(button.text()).toBe(testName);
    button.simulate('click');
    expect(testOnClick.mock.calls.length).toBe(1);
    expect(testOnClick).toHaveBeenCalled();
  });

  it('should render button without additional class if it is not defined', () => {
    const defaultClass = 'btn';
    const component = shallow(<Button />);

    expect(component.hasClass(defaultClass)).toBeTruthy();
  });
});
