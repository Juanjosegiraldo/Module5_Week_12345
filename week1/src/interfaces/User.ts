// Address sub-interface for users
export interface Address {
  street: string;
  city: string;
  country: string;
  zipCode: string;
}

// Roles available in the system
export type UserRole = "admin" | "customer" | "seller";

// Main user interface
export interface User {
  // Required fields
  id: string;
  fullName: string;
  email: string;
  isActive: boolean;
  role: UserRole;
  address: Address;
  createdAt: string;

  // Optional fields
  phone?: string;
  avatarUrl?: string;
  tags?: string[];
}
