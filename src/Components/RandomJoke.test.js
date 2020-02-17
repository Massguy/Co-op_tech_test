import React from "react";
import { shallow } from "enzyme";
import RandomJoke from "./RandomJoke";

it("should show correct text", () => {
  const wrapper = shallow(<RandomJoke />);
  expect(wrapper.text().includes("Click here to get random Jokes")).toBe(true);
});
