import { render, screen } from "@testing-library/react";
import Booking from "./Booking";
import { describe, expect } from "vitest";

describe("Booking Component", () => {
    it("should render component", () => {
        render(<Booking />);
        const element = screen.getByRole("button");
        expect(element).toBeInTheDocument();
    });
});