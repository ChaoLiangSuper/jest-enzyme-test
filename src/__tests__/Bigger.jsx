import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Bigger from '../Bigger';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const propsOfGreatA = {
  a: 2,
  b: 1
}

const propsOfGreatB = {
  a: 1,
  b: 3
}

it('should render default component', () => {
  const component = renderer.create(<Bigger />);
  const snap = component.toJSON();
  expect(snap).toMatchSnapshot();
});

it('should return A with propsOfGreatA', () => {
  const componentA = shallow(<Bigger {...propsOfGreatA} />);
  expect(componentA.html()).toBe('<div>getBiggerNum: 2</div>')
});

it('should return B with propsOfGreatB', () => {
  const componentB = shallow(<Bigger {...propsOfGreatB} />);
  expect(componentB.html()).toBe('<div>getBiggerNum: 3</div>')
});
