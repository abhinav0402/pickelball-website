"use client";

import { useState } from "react";
import { UtensilsCrossed, Coffee, Salad, IceCreamCone, Beer, Plus, Minus, ShoppingCart } from "lucide-react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
  popular?: boolean;
};

const menu: MenuItem[] = [
  // Smoothies & Drinks
  { id: 1, name: "Green Machine Smoothie", description: "Spinach, banana, mango, coconut water", price: 8.99, category: "Smoothies & Drinks", emoji: "🥤", popular: true },
  { id: 2, name: "Berry Blast Smoothie", description: "Mixed berries, yogurt, honey, ice", price: 8.99, category: "Smoothies & Drinks", emoji: "🫐" },
  { id: 3, name: "Protein Power Shake", description: "Whey protein, PB, banana, oat milk", price: 9.99, category: "Smoothies & Drinks", emoji: "💪" },
  { id: 4, name: "Fresh Lemonade", description: "House-made lemonade with mint", price: 4.99, category: "Smoothies & Drinks", emoji: "🍋" },
  { id: 5, name: "Cold Brew Coffee", description: "24-hour cold brew, locally roasted", price: 5.49, category: "Smoothies & Drinks", emoji: "☕" },
  // Snacks & Bites
  { id: 6, name: "Loaded Nachos", description: "Tortilla chips, cheese, jalapeños, guac, sour cream", price: 12.99, category: "Snacks & Bites", emoji: "🧀", popular: true },
  { id: 7, name: "Chicken Tenders Basket", description: "Hand-breaded tenders with fries & dipping sauce", price: 11.99, category: "Snacks & Bites", emoji: "🍗" },
  { id: 8, name: "Soft Pretzels", description: "Warm pretzels with beer cheese dip", price: 8.99, category: "Snacks & Bites", emoji: "🥨" },
  { id: 9, name: "Street Tacos (3)", description: "Choice of carne asada, chicken, or fish", price: 10.99, category: "Snacks & Bites", emoji: "🌮" },
  // Bowls & Mains
  { id: 10, name: "The Dink Bowl", description: "Grilled chicken, quinoa, avocado, veggies, tahini", price: 13.99, category: "Bowls & Mains", emoji: "🥗", popular: true },
  { id: 11, name: "Smash Burger", description: "Double patty, American cheese, special sauce, brioche bun", price: 12.99, category: "Bowls & Mains", emoji: "🍔" },
  { id: 12, name: "Poke Bowl", description: "Ahi tuna, sushi rice, edamame, seaweed, ponzu", price: 14.99, category: "Bowls & Mains", emoji: "🐟" },
  { id: 13, name: "Veggie Wrap", description: "Hummus, roasted veggies, feta, mixed greens", price: 10.99, category: "Bowls & Mains", emoji: "🌯" },
  // Beer & Wine
  { id: 14, name: "Local IPA Draft", description: "Rotating local craft IPA on tap", price: 7.99, category: "Beer & Wine", emoji: "🍺" },
  { id: 15, name: "House Lager", description: "Crisp, refreshing house lager", price: 5.99, category: "Beer & Wine", emoji: "🍻" },
  { id: 16, name: "Glass of Wine", description: "Choose from our curated wine list", price: 8.99, category: "Beer & Wine", emoji: "🍷" },
  { id: 17, name: "The Pickle Margarita", description: "Tequila, pickle brine, lime, tajín rim", price: 11.99, category: "Beer & Wine", emoji: "🍹", popular: true },
  // Desserts
  { id: 18, name: "Açaí Bowl", description: "Açaí, granola, banana, berries, honey drizzle", price: 11.99, category: "Desserts", emoji: "🍇" },
  { id: 19, name: "Cookie Skillet", description: "Fresh-baked chocolate chip cookie with vanilla ice cream", price: 8.99, category: "Desserts", emoji: "🍪" },
];

const categoryIcons: Record<string, React.ElementType> = {
  "Smoothies & Drinks": Coffee,
  "Snacks & Bites": Salad,
  "Bowls & Mains": UtensilsCrossed,
  "Beer & Wine": Beer,
  "Desserts": IceCreamCone,
};

const categories = [...new Set(menu.map((m) => m.category))];

export default function FoodDrinks() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [order, setOrder] = useState<Record<number, number>>({});

  const updateOrder = (id: number, delta: number) => {
    setOrder((prev) => {
      const next = (prev[id] || 0) + delta;
      if (next <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });
  };

  const orderTotal = Object.entries(order).reduce((sum, [id, qty]) => {
    const item = menu.find((m) => m.id === Number(id));
    return sum + (item?.price || 0) * qty;
  }, 0);

  const orderCount = Object.values(order).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
            <UtensilsCrossed className="h-8 w-8" /> Food & Drinks
          </h1>
          <p className="mt-3 text-lg text-white/80">
            Fuel up before your match or celebrate after. Order ahead for courtside pickup!
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar categories */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Menu</h3>
              {categories.map((cat) => {
                const Icon = categoryIcons[cat] || UtensilsCrossed;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-colors ${
                      activeCategory === cat
                        ? "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400"
                        : "hover:bg-surface text-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {cat}
                  </button>
                );
              })}

              {/* Order summary */}
              {orderCount > 0 && (
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 p-5 text-white">
                  <div className="flex items-center gap-2 font-semibold">
                    <ShoppingCart className="h-4 w-4" />
                    Your Order ({orderCount})
                  </div>
                  <div className="mt-3 space-y-1.5 text-sm text-white/80">
                    {Object.entries(order).map(([id, qty]) => {
                      const item = menu.find((m) => m.id === Number(id));
                      if (!item) return null;
                      return (
                        <div key={id} className="flex justify-between">
                          <span>{qty}x {item.name}</span>
                          <span>${(item.price * qty).toFixed(2)}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/20 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                  <button className="mt-4 w-full rounded-full bg-white text-orange-600 py-2.5 font-semibold hover:bg-yellow-300 hover:text-orange-700 transition-colors">
                    Place Order
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Menu items */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">{activeCategory}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {menu
                .filter((m) => m.category === activeCategory)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-5 rounded-2xl border border-border bg-background hover:border-orange-300 hover:shadow-md transition-all"
                  >
                    <div className="text-4xl shrink-0 mt-1">{item.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-sm">
                            {item.name}
                            {item.popular && (
                              <span className="ml-2 inline-block text-xs bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 px-2 py-0.5 rounded-full font-medium">
                                Popular
                              </span>
                            )}
                          </h3>
                          <p className="text-xs text-muted mt-1 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="font-bold">${item.price.toFixed(2)}</span>
                        <div className="flex items-center gap-2">
                          {order[item.id] ? (
                            <>
                              <button
                                onClick={() => updateOrder(item.id, -1)}
                                className="p-1.5 rounded-full bg-surface hover:bg-surface-dark transition-colors"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="text-sm font-semibold w-6 text-center">
                                {order[item.id]}
                              </span>
                              <button
                                onClick={() => updateOrder(item.id, 1)}
                                className="p-1.5 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => updateOrder(item.id, 1)}
                              className="px-4 py-1.5 rounded-full bg-orange-500 text-white text-xs font-semibold hover:bg-orange-600 transition-colors"
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
