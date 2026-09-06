"use client";

import { useState } from "react";
import { ShoppingBag, Star, Filter, Search, ShoppingCart } from "lucide-react";

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  badge?: string;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Joola Ben Johns Hyperion CFS 16", brand: "JOOLA", price: 219.99, rating: 4.9, reviews: 342, category: "Paddles", badge: "Best Seller", image: "🏓" },
  { id: 2, name: "Selkirk Vanguard Power Air", brand: "Selkirk", price: 199.99, rating: 4.8, reviews: 218, category: "Paddles", image: "🏓" },
  { id: 3, name: "CRBN-1X Power Series", brand: "CRBN", price: 179.99, rating: 4.7, reviews: 156, category: "Paddles", badge: "New", image: "🏓" },
  { id: 4, name: "Engage Pursuit Pro MX", brand: "Engage", price: 189.99, rating: 4.6, reviews: 124, category: "Paddles", image: "🏓" },
  { id: 5, name: "Franklin X-40 Outdoor Balls (12)", brand: "Franklin", price: 24.99, rating: 4.8, reviews: 567, category: "Balls", badge: "Best Seller", image: "🟡" },
  { id: 6, name: "Dura Fast 40 Outdoor (12)", brand: "Onix", price: 29.99, rating: 4.7, reviews: 389, category: "Balls", image: "🟡" },
  { id: 7, name: "K-Swiss Express Light Court Shoe", brand: "K-Swiss", price: 89.99, rating: 4.5, reviews: 203, category: "Shoes", image: "👟" },
  { id: 8, name: "ASICS Gel-Renma Pickleball Shoe", brand: "ASICS", price: 109.99, rating: 4.7, reviews: 178, category: "Shoes", badge: "Popular", image: "👟" },
  { id: 9, name: "Pickleball Paddle Cover Pro", brand: "DinkZone", price: 19.99, rating: 4.4, reviews: 98, category: "Accessories", image: "🎒" },
  { id: 10, name: "Overgrip Pack (3 grips)", brand: "Tourna", price: 8.99, rating: 4.6, reviews: 445, category: "Accessories", image: "🏸" },
  { id: 11, name: "Sports Duffle Bag", brand: "DinkZone", price: 49.99, rating: 4.3, reviews: 67, category: "Accessories", badge: "Exclusive", image: "🎒" },
  { id: 12, name: "Cooling Towel Pack (2)", brand: "Mission", price: 14.99, rating: 4.5, reviews: 234, category: "Accessories", image: "🧊" },
];

const categories = ["All", "Paddles", "Balls", "Shoes", "Accessories"];

export default function Shop() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<Record<number, number>>({});

  const filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (search === "" || p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()))
  );

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
            <ShoppingBag className="h-8 w-8" /> Pro Shop
          </h1>
          <p className="mt-3 text-lg text-white/80">
            Top paddles, balls, shoes, and gear — shipped or pick up in store.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="h-4 w-4 text-muted shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === cat
                    ? "bg-blue-600 text-white"
                    : "bg-surface text-muted hover:bg-surface-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 w-56"
              />
            </div>
            <button className="relative p-2.5 rounded-full bg-surface hover:bg-surface-dark transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl border border-border bg-background overflow-hidden hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
            >
              <div className="relative bg-surface p-8 flex items-center justify-center text-6xl">
                {product.image}
                {product.badge && (
                  <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    product.badge === "Best Seller"
                      ? "bg-green-100 text-green-700"
                      : product.badge === "New"
                      ? "bg-blue-100 text-blue-700"
                      : product.badge === "Popular"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-purple-100 text-purple-700"
                  }`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="text-xs text-muted font-medium uppercase tracking-wide">
                  {product.brand}
                </div>
                <h3 className="mt-1 font-semibold text-sm leading-snug line-clamp-2">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted">({product.reviews})</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted">
            <ShoppingBag className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm mt-1">Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
