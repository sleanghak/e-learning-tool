import Typography from "./Typography";

describe("UI Rendering", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Typography>Typography</Typography>);
  });

  it("Snapshot Typography", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("It has p tag", () => {
    expect(wrapper.find("p").exists()).toBeTruthy();
  });
  it("It has content", () => {
    expect(wrapper.find("p").props().children).toEqual("Typography");
  });
});
