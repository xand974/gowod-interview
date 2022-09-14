export const redirect = (navigation: any, to: string): void =>
  navigation.navigate(to);

export const sleep = async (ms: number) =>
  await new Promise((res) => setTimeout(res, ms));
