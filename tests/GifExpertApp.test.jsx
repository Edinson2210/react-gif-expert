import { render, screen } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";

describe("Pruebas en <GIfExpertApp/>", () => {
  test("should first", () => {
    render(<GiftExpertApp />);
    screen.debug();
  });
});
