import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

describe("ProductCollection - Filter By dog", () => {
  beforeEach(async () => {
    render(<ProductCollection />);
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

  test("filters products by 'Dog' tag and displays 11 products in the table", async () => {
    const filterInput = screen.getByTestId("filter-tag-Dog");
    fireEvent.click(filterInput);

    await waitFor(() => {
      expect(screen.getByTestId("products-grid").children.length).toBe(11);
    });
  });

  test("displays products pagination", () => {
    expect(screen.getByTestId("products-pagination")).toBeInTheDocument();
  });
});

describe("ProductCollection - Filter By subscription and cat", () => {
  beforeEach(async () => {
    render(<ProductCollection />);
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

  test("filters products by subscription and 'Cat' tag and displays 5 products in the table", async () => {
    const subscriptionInput = screen.getByTestId("filter-subscription");
    fireEvent.click(subscriptionInput);

    const filterInput = screen.getByTestId("filter-tag-Cat");
    fireEvent.click(filterInput);

    await waitFor(() => {
      expect(screen.getByTestId("products-grid").children.length).toBe(5);
    });
  });

  test("displays products pagination", () => {
    expect(screen.getByTestId("products-pagination")).toBeInTheDocument();
  });
});

describe("ProductCollection - Filter By price", () => {
  beforeEach(async () => {
    render(<ProductCollection />);
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

  test("filters products by max price of 30 and displays 1 product in the table", async () => {
    const maxPriceInput = screen.getByTestId(
      "filter-price"
    ) as HTMLInputElement;
    fireEvent.change(maxPriceInput, { target: { value: "30" } });

    await waitFor(() => {
      expect(screen.getByTestId("products-grid").children.length).toBe(1);
    });
  });

  test("displays products pagination", () => {
    expect(screen.getByTestId("products-pagination")).toBeInTheDocument();
  });
});
