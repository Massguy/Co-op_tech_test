import React from "react";
import { shallow } from "enzyme";
import Nav from "./Nav";

it("should show correct text for Home button", () => {
  const wrapper = shallow(<Nav />);
  expect(wrapper.text().includes("Home")).toBe(true);
});
