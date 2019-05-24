import React from 'react';
import { it, expect, describe } from 'jest';
import { shallow } from 'enzyme';
import ErrorBoundary from './error-boundary';

describe('<ErrorBoundary />', () => {
  const testClass = 'test-clss';
  const testTitle = 'Something went wrong.';
  const testError = 'Error thrown from problem child';
  const Something = () => null;

  it('renders markup of error boundary', () => {
    const wrapper = shallow(<ErrorBoundary><Something/></ErrorBoundary>);
    wrapper.simulateError(testError);
    expect(wrapper.hasClass(testClass));
    expect(wrapper.find('h2').text()).toBe(testTitle);
    expect(wrapper.find('details').text()).toContain(testError);
  });
});
