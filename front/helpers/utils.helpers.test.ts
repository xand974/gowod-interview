import { getPercentageByName } from "./utils.helpers";
import {
  convertDateToString,
  getPercentageFromTotal,
  getGlobalPercentageFromValue,
} from "./utils.helpers";

describe("test utils", () => {
  test("should convert a given date to string in french", () => {
    const date = convertDateToString(new Date(2002, 6, 10));
    expect(date).toEqual("10 juillet 2002");
  });

  test("should get the percentage from a total", () => {
    const percentage = getPercentageFromTotal(10, 20);
    expect(percentage).toEqual(50);
  });

  test("should get the percentage rate based on the sum of the result in the mobi test", () => {
    const value = getGlobalPercentageFromValue(7);
    expect(value).toEqual(35);
  });

  test("get percentage rate for a given body part based on the max value of the related field", () => {
    const percentage = getPercentageByName(3, "overhead");
    expect(percentage).toEqual("60");
  });
});
