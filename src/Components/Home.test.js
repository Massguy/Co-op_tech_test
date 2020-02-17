import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
it("should render header", () => {
  const wrapper = shallow(<Home />);
  const h1 = wrapper.find("h1");

  const result = h1.text();
  expect(result).toBe("Chuck Jokes");
});

it("should render h4 chuck watching you line", () => {
  const wrapper = shallow(<Home />);
  const h4 = wrapper.find("h4");

  const result = h4.text();
  expect(result).toBe(
    " PS.Make sure you laugh Chuck will always be watching you."
  );
});
it("should render first line of home page", () => {
  const wrapper = shallow(<Home />);
  const p1 = wrapper.find("p.line1").text();

  expect(p1).toBe("Welcome to the world of Chuck Norris jokes. ");
});
it("should render second line of home page", () => {
  const wrapper = shallow(<Home />);
  const p1 = wrapper.find("p.line2").text();

  expect(p1).toBe("If you want Chuck to Make you laugh you have 2 options.");
});
it("should render third line of home page", () => {
  const wrapper = shallow(<Home />);
  const p1 = wrapper.find("p.line3").text();

  expect(p1).toBe(
    "1) Click the Get Jokes button to go to a new page with a random Joke after each click."
  );
});
it("should render fourth line of home page", () => {
  const wrapper = shallow(<Home />);
  const p1 = wrapper.find("p.line4").text();

  expect(p1).toBe(
    "2)Click the Search Joke button for a more personalised Joke."
  );
});

it("should show correct text for first button", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.text().includes("Get Jokes")).toBe(true);
});

it("should show correct text for second button", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.text().includes("Search Jokes")).toBe(true);
});
