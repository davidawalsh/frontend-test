import {
  useProductsService,
  useTags,
  useFetchTags,
  useSubscription,
  useMaxPrice,
} from "./ProductCollection.hooks";
import "./ProductCollection.css";
import { ProductCard } from "../ProductCard";

const ProductCollection = () => {
  const { subscription, handleSubscriptionChange } = useSubscription();
  const { maxPrice, handleMaxPriceChange } = useMaxPrice();
  const { tags, handleTagChange } = useTags();
  const { serverTags } = useFetchTags();
  const { data, error, loading } = useProductsService({
    tags,
    subscription,
    maxPrice,
  });

  return (
    <div className="product-collection">
      <div data-testid="filters-sidebar" className="filters-sidebar">
        <h1>Filters</h1>
        <div>
          <h2>Tags</h2>
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
          <h2>Subscription</h2>

          <input
            data-testid="filter-subscription"
            type="checkbox"
            id="subscription"
            value="subscription"
            onChange={handleSubscriptionChange}
          />
          <label htmlFor="subscription">Available on subscription</label>
        </div>
        <div>
          <h2>Max Price</h2>
          <input
            data-testid="filter-price"
            type="range"
            min="0"
            max="200"
            step="10"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
          <span>Max Price: {maxPrice}</span>
        </div>
      </div>
      <div className="product-area">
        <h1>Products</h1>
        {loading && <div data-testid="products-loading">Loading...</div>}
        {error && <div>{error.message}</div>}
        {!data && <div>No Results For Your Selection</div>}
        {data && (
          <div data-testid="products-grid" className="products-grid">
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
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

export { ProductCollection };
