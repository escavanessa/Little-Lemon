import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import {
    RouterProvider,
    createMemoryRouter,
} from "react-router-dom";
import Router from "../src/Routes";

describe("Booking Component", () => {
    it("should render component", () => {
        const router = createMemoryRouter(Router, {
            initialEntries: ["/booking"],
        })
        render(<RouterProvider router={router} />);
        const element = screen.getByLabelText('Name');
        expect(element).toBeInTheDocument();
    });

    it("should render component", () => {
        const router = createMemoryRouter(Router, {
            initialEntries: ["/booking"],
        })
        render(<RouterProvider router={router} />);
        const element = screen.getByLabelText('Choose Time');
        expect(element).toBeInTheDocument();
    });

    it("should render component", () => {
        const router = createMemoryRouter(Router, {
            initialEntries: ["/booking"],
        })
        render(<RouterProvider router={router} />);
        const element = screen.getByLabelText("Date");
        expect(element).toBeInTheDocument();
    });

        it("should render component", () => {
            const router = createMemoryRouter(Router, {
                initialEntries: ["/booking"],
            })
            render(<RouterProvider router={router} />);
           const element = screen.getByLabelText("Occasion");
           expect(element).toBeInTheDocument();
        });

     it("should render component", () => {
        const router = createMemoryRouter(Router, {
            initialEntries: ["/booking"],
        })
          render(<RouterProvider router={router} />);
          const element = screen.getByLabelText("Number of Guests");
          expect(element).toBeInTheDocument();
       });

    it("should render component", () => {
        const router = createMemoryRouter(Router, {
            initialEntries: ["/booking"],
        })
        render(<RouterProvider router={router} />);
        const element = screen.getByRole("button");
        expect(element).toBeInTheDocument();
    });
});