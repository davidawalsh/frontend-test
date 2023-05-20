import { Product } from "../../types/product";
import "./ProductCard.css";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img
        src={product.image_src}
        alt={product.title}
        className="product-image"
      />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">£{product.price.toFixed(2)}</p>
      <a
        href={product.url}
        className="product-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Product
      </a>
    </div>
  );
};
