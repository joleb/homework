import { isTruthy, stripHtml } from "../general";

describe("isTruthy", () => {
  it("should return true for truthy values", () => {
    expect(isTruthy(1)).toBe(true);
    expect(isTruthy("hello")).toBe(true);
    expect(isTruthy(true)).toBe(true);
    expect(isTruthy({})).toBe(true);
    expect(isTruthy([])).toBe(true);
  });

  it("should return false for falsy values", () => {
    expect(isTruthy(null)).toBe(false);
    expect(isTruthy(undefined)).toBe(false);
    expect(isTruthy(false)).toBe(false);
    expect(isTruthy("")).toBe(false);
    expect(isTruthy(0)).toBe(false);
  });
});

describe("stripHtml", () => {
  it("should remove HTML tags", () => {
    const html = "<div>Hello <b>world</b>!</div>";
    const result = stripHtml(html);
    expect(result).toBe("Hello world!");
  });

  it("should replace HTML entities", () => {
    const html = "Hello &uuml;ber world!";
    const result = stripHtml(html);
    expect(result).toBe("Hello über world!");
  });

  it("should handle both HTML tags and entities", () => {
    const html = "<div>Hello &uuml;ber <b>world</b>!</div>";
    const result = stripHtml(html);
    expect(result).toBe("Hello über world!");
  });

  it("should return an empty string for null or undefined input", () => {
    expect(stripHtml(null)).toBe("");
    expect(stripHtml(undefined)).toBe("");
  });

  it("should return the same string if there are no HTML tags or entities", () => {
    const text = "Hello world!";
    const result = stripHtml(text);
    expect(result).toBe(text);
  });
});
