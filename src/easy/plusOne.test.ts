import { describe, test, expect } from "@jest/globals";
import { plusOne } from "./plusOne";

describe("plusOne", () => {
  test("should return [1,3,5,7]", () => {
    expect(plusOne([1, 3, 5, 6])).toStrictEqual([1, 3, 5, 7]);
  });
  test("should return [1,0,0,0]", () => {
    expect(plusOne([9, 9, 9])).toStrictEqual([1, 0, 0, 0]);
  });
  test("should return [9,0,0,0]", () => {
    expect(plusOne([8, 9, 9, 9])).toStrictEqual([9, 0, 0, 0]);
  });
});
