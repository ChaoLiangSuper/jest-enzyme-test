import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

it('should render default component', () => {
  const component = renderer.create(<App />);
  const snap = component.toJSON();
  expect(snap).toMatchSnapshot();
});
