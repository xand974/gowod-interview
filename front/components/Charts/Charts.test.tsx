import { render, screen } from "@testing-library/react";

import renderer from "react-test-renderer";
import PercentageChart from "./PercentageChart";

test("renders react component", () => {
  const tree: any = renderer.create(<PercentageChart total={10} />).toJSON();
  console.log(tree);

  expect(tree?.children?.length).toBe(1);
  expect(2 + 3).toEqual(5);
});
