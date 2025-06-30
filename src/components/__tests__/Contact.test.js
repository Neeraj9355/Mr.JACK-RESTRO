import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Hello, this is Contact page Component", () => {
  it("should load contact vs Component ", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load contact vs Component ", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load contact vs Component ", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Your full name");
    expect(input).toBeInTheDocument();
  });
});
