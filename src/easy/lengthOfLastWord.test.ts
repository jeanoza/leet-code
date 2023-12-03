import { describe, test, expect } from "@jest/globals";
import { lengthOfLastWord } from "./lengthOfLastWord";

describe("length of last word", () => {
  test("should return 4", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });
});
