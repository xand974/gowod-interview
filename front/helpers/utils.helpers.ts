import { MAX_TEST_SCORES } from "mock/data";
import moment from "moment";

export const redirect = (navigation: any, to: string): void =>
  navigation.navigate(to);

export const sleep = async (ms: number) =>
  await new Promise((res) => setTimeout(res, ms));

export const convertDateToString = (date: Date) =>
  moment(date).locale("fr").format("DD MMMM YYYY");

export const getPercentageFromTotal = (value: number, total: number) => {
  return (value / total) * 100;
};

export const getGlobalPercentageFromValue = (value: number) => {
  return (value / MAX_TEST_SCORES.global) * 100;
};

// * this should return a number
export const getPercentageByName = (
  percentage: number,
  name: "ankles" | "hips" | "overhead" | "postchain" | "shoulders"
) => {
  return ((percentage / MAX_TEST_SCORES[name]) * 100).toFixed();
};
