import { describe, test, expect } from "@jest/globals";
import { searchInsert } from "./searchInsert";

describe("searchInsert", () => {
  test("should return 2", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });
});
