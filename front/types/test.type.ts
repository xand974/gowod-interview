export interface QuestionnaireModel {
  archetype: string;
  name: string;
  responses: {
    points: number;
    title: string;
  }[];
}

export type BodyState =
  | "ankles"
  | "hips"
  | "overhead"
  | "postchain"
  | "shoulders";

export interface PercentageChartModel {
  name: "ankles" | "hips" | "overhead" | "postchain" | "shoulders";
  percentage: number;
}
