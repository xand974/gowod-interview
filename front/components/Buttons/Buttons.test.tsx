import SimpleButton from "./SimpleButton";
import renderer from "react-test-renderer";

test("render Simple Button component", () => {
  const component = renderer.create(
    <SimpleButton
      text="Sample"
      bg="red"
      onPress={() => {
        return true;
      }}
    ></SimpleButton>
  );
  const componentJSON = component.toJSON() as any;
  const element = component.toTree();
  const renderedElement = element.rendered as any;

  expect(componentJSON.props.style.backgroundColor).toEqual("red");
  expect(renderedElement?.props.onPress()).toEqual(true);
  expect(componentJSON?.children?.length).toEqual(1);
  expect(componentJSON).toMatchSnapshot();
});
