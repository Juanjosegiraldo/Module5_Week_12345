// Interface for product dimensions (optional)
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

// Main product interface - used across the app
export interface Product {
  // Required fields
  sku: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  isActive: boolean;
  category: string;
  imageUrl: string;
  createdAt: string;

  // Optional fields
  description?: string;
  tags?: string[];
  dimensions?: Dimensions;
}
