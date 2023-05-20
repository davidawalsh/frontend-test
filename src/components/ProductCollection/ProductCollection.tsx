import React from "react";
import { useProductsService } from "./ProductCollection.hooks";
const ProductCollection = () => {
  const { data, error, loading } = useProductsService();

  if (loading) {
    return <div data-testid="products-loading">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div>
      <div data-testid="filters-sidebar">
        <h1>Filters</h1>
      </div>
      <div>
        <h1>Products</h1>
        <div data-testid="products-grid">
          {data.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
            </div>
          ))}
        </div>
        <div data-testid="products-pagination">
          <h1>Pagination</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
