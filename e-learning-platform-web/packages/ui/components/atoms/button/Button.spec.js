import React from "react";
import { Button } from "./Button";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
describe("Render Button", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Button
        variant="contained"
        color="primary"
        label={"my button"}
        size={"small"}
      />
    );
  });
  // it("snapshot button", () => {
  //   expect(toJSON(wrapper)).toMatchSnapshot();
  // });
  it("it has button tag", () => {
    expect(wrapper.find("button").exists()).toBeTruthy();
  });
  it("it has content", () => {
    expect(wrapper.find("button").props().children).toEqual("my button");
  });
});
