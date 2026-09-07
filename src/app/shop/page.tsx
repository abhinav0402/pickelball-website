"use client";

import { useState } from "react";
import { ShoppingBag, Star, Filter, Search, ShoppingCart, Disc, CircleDot, Footprints, Backpack } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/PageHero";

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  badge?: string;
  icon: React.ElementType;
  image?: string;
};

const products: Product[] = [
  { id: 1, name: "Joola Ben Johns Hyperion CFS 16", brand: "JOOLA", price: 219.99, rating: 4.9, reviews: 342, category: "Paddles", badge: "Best Seller", icon: Disc, image: "/images/shop-paddle-net.jpg" },
  { id: 2, name: "Selkirk Vanguard Power Air", brand: "Selkirk", price: 199.99, rating: 4.8, reviews: 218, category: "Paddles", icon: Disc, image: "/images/shop-paddle-luxe.jpg" },
  { id: 3, name: "CRBN-1X Power Series", brand: "CRBN", price: 179.99, rating: 4.7, reviews: 156, category: "Paddles", badge: "New", icon: Disc, image: "/images/shop-paddle-fence.jpg" },
  { id: 4, name: "Engage Pursuit Pro MX", brand: "Engage", price: 189.99, rating: 4.6, reviews: 124, category: "Paddles", icon: Disc, image: "/images/shop-paddle-franklin.jpg" },
  { id: 5, name: "Franklin X-40 Outdoor Balls (12)", brand: "Franklin", price: 24.99, rating: 4.8, reviews: 567, category: "Balls", badge: "Best Seller", icon: CircleDot, image: "/images/shop-hero-paddles.jpg" },
  { id: 6, name: "Dura Fast 40 Outdoor (12)", brand: "Onix", price: 29.99, rating: 4.7, reviews: 389, category: "Balls", icon: CircleDot, image: "/images/shop-gear-flatlay.jpg" },
  { id: 7, name: "K-Swiss Express Light Court Shoe", brand: "K-Swiss", price: 89.99, rating: 4.5, reviews: 203, category: "Shoes", icon: Footprints, image: "/images/shop-shoes-lacing.jpg" },
  { id: 8, name: "ASICS Gel-Renma Pickleball Shoe", brand: "ASICS", price: 109.99, rating: 4.7, reviews: 178, category: "Shoes", badge: "Popular", icon: Footprints, image: "/images/shop-shoes-group.jpg" },
  { id: 9, name: "Pickleball Paddle Cover Pro", brand: "DinkZone", price: 19.99, rating: 4.4, reviews: 98, category: "Accessories", icon: Backpack, image: "/images/shop-gear-flatlay.jpg" },
  { id: 10, name: "Overgrip Pack (3 grips)", brand: "Tourna", price: 8.99, rating: 4.6, reviews: 445, category: "Accessories", icon: Disc, image: "/images/shop-overgrip.jpg" },
  { id: 11, name: "Sports Duffle Bag", brand: "DinkZone", price: 49.99, rating: 4.3, reviews: 67, category: "Accessories", badge: "Exclusive", icon: Backpack, image: "/images/shop-duffle.jpg" },
  { id: 12, name: "Cooling Towel Pack (2)", brand: "Mission", price: 14.99, rating: 4.5, reviews: 234, category: "Accessories", icon: Backpack, image: "/images/shop-towel.jpg" },
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
    <div className="bg-dark-bg min-h-screen">
      <PageHero
        title="Merchandise"
        subtitle="Top paddles, balls, shoes, and gear — shipped to your door or pick up in store."
        icon={<ShoppingBag className="h-10 w-10 text-cta-green" aria-hidden="true" />}
        backgroundImage="/images/gear-flatlay.jpg"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto" role="radiogroup" aria-label="Filter by category">
            <Filter className="h-4 w-4 text-dark-muted shrink-0" aria-hidden="true" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                role="radio"
                aria-checked={category === cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  category === cat
                    ? "bg-cta-green text-dark-bg"
                    : "bg-dark-surface text-dark-muted hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <label htmlFor="shop-search" className="sr-only">Search products</label>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-dark-muted" aria-hidden="true" />
              <input
                id="shop-search"
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full border border-white/10 bg-dark-surface text-white text-sm focus:outline-none focus:ring-2 focus:ring-cta-green/30 focus:border-cta-green w-56"
              />
            </div>
            <button className="relative p-2.5 rounded-full bg-dark-surface hover:bg-white/10 text-white transition-colors duration-200" aria-label={`Shopping cart with ${cartCount} items`}>
              <ShoppingCart className="h-5 w-5" aria-hidden="true" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cta-green text-dark-bg text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium" aria-hidden="true">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div key={category} className="animate-content-fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => {
            const ProductIcon = product.icon;
            return (
              <div
                key={product.id}
                className="group rounded-2xl border border-white/10 bg-dark-surface overflow-hidden hover:border-cta-green/30 hover:shadow-lg hover:shadow-cta-green/5 transition-all duration-200"
              >
                <div className="relative bg-dark-bg flex items-center justify-center overflow-hidden aspect-[4/3]">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <ProductIcon className="h-16 w-16 text-cta-green/30" aria-hidden="true" />
                  )}
                  {product.badge && (
                    <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
                      product.badge === "Best Seller"
                        ? "bg-amber-900/30 text-amber-400"
                        : product.badge === "New"
                        ? "bg-red-900/30 text-red-400"
                        : product.badge === "Popular"
                        ? "bg-orange-900/30 text-orange-400"
                        : "bg-cta-green/10 text-cta-green"
                    }`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-xs text-dark-muted font-medium uppercase tracking-wide">
                    {product.brand}
                  </div>
                  <h3 className="mt-1 font-semibold text-sm text-white leading-snug line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                    <span className="text-sm font-medium text-white">{product.rating}</span>
                    <span className="text-xs text-dark-muted">({product.reviews})</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-white">${product.price.toFixed(2)}</span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="px-4 py-2 rounded-full bg-cta-green text-dark-bg text-xs font-bold hover:bg-cta-green/90 transition-all duration-150 ease-out active:scale-[0.96]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-dark-muted">
            <ShoppingBag className="h-12 w-12 mx-auto mb-4 opacity-30" aria-hidden="true" />
            <p className="text-lg font-medium text-white">No products found</p>
            <p className="text-sm mt-1">Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
