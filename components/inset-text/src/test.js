import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import InsetText, { insetText, InsetTextNarrowBorder } from './fixtures';

describe('inset text', () => {
  const wrapperInsetText = mount(<InsetText />);
  const wrapperInsetTextNarrowBorder = mount(<InsetTextNarrowBorder />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InsetText />, div);
    ReactDOM.render(<InsetTextNarrowBorder />, div);
  });

  it('should render the InsetText component', () => {
    const output = shallow(<InsetText />);
    expect(output.find('p')).toBeTruthy();
  });

  it('default to not have an isNarrow property or be false', () => {
    expect(shallow(<InsetText />).dive().get(0).props.isNarrow).toBeFalsy();
  });

  it("should render the expected text within a 'p' tag", () => {
    const output = mount(<InsetText />);
    expect(output.find('p').text()).toEqual(insetText);
  });

  it('matches the InsetText snapshot', () => {
    expect(wrapperInsetText).toMatchSnapshot('inset text');
  });

  it('should render the InsetText component with isNarrow attribute', () => {
    const output = shallow(<InsetTextNarrowBorder />);
    expect(output.find('p')).toBeTruthy();
  });

  it('should have an isNarrow prop set to true', () => {
    expect(shallow(<InsetTextNarrowBorder />).dive().get(0).props.isNarrow).toBeTruthy();
  });

  it("should render the expected text within a 'p' tag", () => {
    const output = mount(<InsetTextNarrowBorder />);
    expect(output.find('p').text()).toEqual(insetText);
  });

  it('matches the InsetTextNarrowBorder snapshot', () => {
    expect(wrapperInsetTextNarrowBorder).toMatchSnapshot('inset text narrow border');
  });
});
