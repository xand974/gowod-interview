import renderer from "react-test-renderer";
import Avatar from "./Avatar";
import ProgressBar from "./ProgressBar";

test("render Avatar component", () => {
  const component = renderer
    .create(<Avatar data={{ name: "Alexandre", description: "Malet" }} />)
    .toJSON() as any;

  expect(component.children?.length).toEqual(2);
  expect(component).toMatchSnapshot();
});

test("render Progress Bar component", () => {
  const component = renderer
    .create(<ProgressBar activeValue={10} reference={20} />)
    .toJSON() as any;

  expect(component.children?.length).toEqual(2);
  expect(component).toMatchSnapshot();
});
