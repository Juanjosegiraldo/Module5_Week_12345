import React from "react";
import { Product } from "../interfaces/Product";
import ProductCard from "./ProductCard";

// Props for the ProductList component
interface ProductListProps {
  products: Product[];
}

// Renders a grid of product cards using .map()
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  // If there are no products, show a message
  if (products.length === 0) {
    return <p className="empty-msg">No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        // Use SKU as key since it's unique
        <ProductCard key={product.sku} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
