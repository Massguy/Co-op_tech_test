import React from "react";
import { shallow } from "enzyme";
import SearchJokes from "./SearchJokes";

const simulatechangeOninput = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find(inputSelector);
  input.simulate("change", {
    target: { value: newValue }
  });
  return wrapper.find(inputSelector);
};
it("lets me fill out the form", () => {
  const wrapper = shallow(<SearchJokes />);
  simulatechangeOninput(wrapper, "input#first-input", "stefin");
  simulatechangeOninput(wrapper, "input#second-input", "philip");
});

it("should render instruction at the top of the form", () => {
  const wrapper = shallow(<SearchJokes />);
  const h3 = wrapper.find("h3.search-title").text();

  expect(h3).toBe("Enter FirstName and SecondName for a personalised Joke");
});
