import React from "react";
import {
  useProductsService,
  useTags,
  useFetchTags,
} from "./ProductCollection.hooks";

const ProductCollection = () => {
  const { tags, handleTagChange } = useTags();
  const { serverTags } = useFetchTags();
  const { data, error, loading } = useProductsService({ tags });

  return (
    <div>
      <div data-testid="filters-sidebar">
        <h1>Filters</h1>
        <div>
          {serverTags.map((tag) => (
            <div key={tag}>
              <input
                data-testid={`filter-tag-${tag}`}
                type="checkbox"
                id={tag}
                value={tag}
                onChange={handleTagChange}
              />
              <label htmlFor={tag}>{tag}</label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>Products</h1>
        {loading && <div data-testid="products-loading">Loading...</div>}
        {error && <div>{error.message}</div>}
        {!data && <div>No Results For Your Selection</div>}
        {data && (
          <div data-testid="products-grid">
            {data.map((product) => (
              <div key={product.id}>
                <h2>{product.title}</h2>
              </div>
            ))}
          </div>
        )}
        <div data-testid="products-pagination">
          <h1>Pagination</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
