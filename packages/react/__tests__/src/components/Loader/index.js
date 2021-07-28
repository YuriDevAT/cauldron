import React from 'react';
import axe from '../../../axe';
import { shallow, mount } from 'enzyme';
import Loader from '../../../../src/components/Loader';

test('handles classNames properly', () => {
  const icon = shallow(<Loader className="baz" />);
  expect(icon.is('.Loader.baz')).toBe(true);
});

test('sets aria-hidden if no label is provided', () => {
  const icon = shallow(<Loader />);
  expect(icon.is('[aria-hidden]')).toBe(true);
});

test('does not set aria-hidden if a label is provided', () => {
  const icon = mount(<Loader label="hi" />);
  expect(icon.is('[aria-hidden]')).toBe(false);
});

test('sets expected progressbar attributes given a label', () => {
  const loader = mount(<Loader label="bananas" />);
  const loaderNode = loader.getDOMNode();

  expect(loaderNode.getAttribute('role')).toBe('progressbar');
  expect(loaderNode.getAttribute('aria-valuetext')).toBe('bananas');
  expect(loaderNode.getAttribute('aria-busy')).toBe('true');
  expect(loaderNode.getAttribute('aria-valuemin')).toBe('0');
  expect(loaderNode.getAttribute('aria-valuemax')).toBe('100');
});

test('returns no axe violations', async () => {
  const withLabel = shallow(<Loader label="hi" />);
  const withoutLabel = shallow(<Loader />);

  expect(await axe(withLabel.html())).toHaveNoViolations();
  expect(await axe(withoutLabel.html())).toHaveNoViolations();
});
