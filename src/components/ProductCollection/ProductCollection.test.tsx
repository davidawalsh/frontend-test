import { render, screen, waitFor } from "@testing-library/react";
import ProductCollection from "./ProductCollection";

describe("ProductCollection", () => {
  beforeEach(async () => {
    render(<ProductCollection />);
    // wait until not loading before running tests
    await waitFor(() => {
      expect(screen.queryByTestId("products-loading")).not.toBeInTheDocument();
    });
  });

  test("displays filters sidebar", () => {
    expect(screen.getByTestId("filters-sidebar")).toBeInTheDocument();
  });

  test("displays a table of products", () => {
    expect(screen.getByTestId("products-grid")).toBeInTheDocument();
  });

  test("displays 12 products in the table", () => {
    expect(screen.getByTestId("products-grid").children.length).toBe(12);
  });

  test("displays products pagination", () => {
    expect(screen.getByTestId("products-pagination")).toBeInTheDocument();
  });
});
