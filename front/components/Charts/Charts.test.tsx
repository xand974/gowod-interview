import renderer from "react-test-renderer";
import PercentageChart from "./PercentageChart";
import BarsChart from "./BarsChart";

test("render percentage chart", () => {
  const component = renderer
    .create(<PercentageChart total={10} />)
    .toJSON() as any;

  const text = component?.children[0];
  expect(text).toBeDefined();
  expect(text.type).toBe("Text");
  expect(text.children).toEqual(["10", "%"]);
  expect(component?.children?.length).toBe(1);
  expect(component).toMatchSnapshot();
});

test("render bars chart", () => {
  const component = renderer
    .create(
      <BarsChart
        value={[
          { name: "ankles", percentage: 10 },
          { name: "shoulders", percentage: 20 },
        ]}
      />
    )
    .toJSON() as any;

  expect(component?.children?.length).toBe(2);
  expect(component).toMatchSnapshot();
});
