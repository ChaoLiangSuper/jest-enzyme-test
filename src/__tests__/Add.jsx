import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Add from '../Add';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  a: 1,
  b: 1
}

it('should render default component', () => {
  const component = renderer.create(<Add />);
  const snap = component.toJSON();
  expect(snap).toMatchSnapshot();
});

it('should render with provided props', () => {
  const component = renderer.create(<Add {...props} />);
  const snap = component.toJSON();
  expect(snap).toMatchSnapshot();
});

it('should render expected html', () => {
  const component = shallow(<Add {...props} />);
  expect(component.html()).toBe('<div>add: 2</div>');
});
