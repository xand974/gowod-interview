import renderer from "react-test-renderer";
import SimpleIcon from "../../components/Icons/SimpleIcon";

test("render SimpleIcon component", () => {
  const component = renderer.create(
    <SimpleIcon
      type="ionicon"
      name="information-circle-outline"
      size={20}
      color="red"
    />
  );
  const componentJSON = component.toJSON() as any;
  expect(componentJSON).toMatchSnapshot();
});
