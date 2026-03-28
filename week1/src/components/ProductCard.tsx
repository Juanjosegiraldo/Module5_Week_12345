import React from "react";
import { Product } from "../interfaces/Product";

// Props for the ProductCard component
interface ProductCardProps {
  product: Product;
}

// Displays a single product with its main info
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-img" />
      <div className="product-info">
        {/* Badge shows if product is available or not */}
        <span className={`badge ${product.isActive ? "active" : "inactive"}`}>
          {product.isActive ? "In Stock" : "Out of Stock"}
        </span>
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">{product.brand}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        {/* Optional description */}
        {product.description && (
          <p className="product-desc">{product.description}</p>
        )}
        {/* Optional tags */}
        {product.tags && (
          <div className="tags">
            {product.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
