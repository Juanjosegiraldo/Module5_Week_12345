import React, { useState } from "react";
import { products, users } from "./data/data";
import ProductList from "./components/ProductList";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  // State to toggle between products and users view
  const [activeTab, setActiveTab] = useState<"products" | "users">("products");

  return (
    <div className="app">
      <header className="header">
        <h1>🛒 Ecommerce Lite</h1>
        <p className="subtitle">
          {products.length} products · {users.length} users
        </p>
        {/* Tab navigation */}
        <nav className="tabs">
          <button
            className={activeTab === "products" ? "tab active" : "tab"}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>
          <button
            className={activeTab === "users" ? "tab active" : "tab"}
            onClick={() => setActiveTab("users")}
          >
            Users
          </button>
        </nav>
      </header>

      <main className="main">
        {/* Render product list or user list depending on active tab */}
        {activeTab === "products" ? (
          <>
            <h2 className="section-title">All Products</h2>
            <ProductList products={products} />
          </>
        ) : (
          <>
            <h2 className="section-title">All Users</h2>
            <div className="user-grid">
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
