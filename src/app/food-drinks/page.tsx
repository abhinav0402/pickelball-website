"use client";

import { useState } from "react";
import { UtensilsCrossed, Coffee, Salad, IceCreamCone, Beer, Plus, Minus, ShoppingCart, Utensils, Wine, CakeSlice } from "lucide-react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: React.ElementType;
  popular?: boolean;
};

const menu: MenuItem[] = [
  { id: 1, name: "Green Machine Smoothie", description: "Spinach, banana, mango, coconut water", price: 8.99, category: "Smoothies & Drinks", icon: Coffee, popular: true },
  { id: 2, name: "Berry Blast Smoothie", description: "Mixed berries, yogurt, honey, ice", price: 8.99, category: "Smoothies & Drinks", icon: Coffee },
  { id: 3, name: "Protein Power Shake", description: "Whey protein, PB, banana, oat milk", price: 9.99, category: "Smoothies & Drinks", icon: Coffee },
  { id: 4, name: "Fresh Lemonade", description: "House-made lemonade with mint", price: 4.99, category: "Smoothies & Drinks", icon: Coffee },
  { id: 5, name: "Cold Brew Coffee", description: "24-hour cold brew, locally roasted", price: 5.49, category: "Smoothies & Drinks", icon: Coffee },
  { id: 6, name: "Loaded Nachos", description: "Tortilla chips, cheese, jalapeños, guac, sour cream", price: 12.99, category: "Snacks & Bites", icon: Utensils, popular: true },
  { id: 7, name: "Chicken Tenders Basket", description: "Hand-breaded tenders with fries & dipping sauce", price: 11.99, category: "Snacks & Bites", icon: Utensils },
  { id: 8, name: "Soft Pretzels", description: "Warm pretzels with beer cheese dip", price: 8.99, category: "Snacks & Bites", icon: Utensils },
  { id: 9, name: "Street Tacos (3)", description: "Choice of carne asada, chicken, or fish", price: 10.99, category: "Snacks & Bites", icon: Utensils },
  { id: 10, name: "The Dink Bowl", description: "Grilled chicken, quinoa, avocado, veggies, tahini", price: 13.99, category: "Bowls & Mains", icon: Salad, popular: true },
  { id: 11, name: "Smash Burger", description: "Double patty, American cheese, special sauce, brioche bun", price: 12.99, category: "Bowls & Mains", icon: UtensilsCrossed },
  { id: 12, name: "Poke Bowl", description: "Ahi tuna, sushi rice, edamame, seaweed, ponzu", price: 14.99, category: "Bowls & Mains", icon: Salad },
  { id: 13, name: "Veggie Wrap", description: "Hummus, roasted veggies, feta, mixed greens", price: 10.99, category: "Bowls & Mains", icon: UtensilsCrossed },
  { id: 14, name: "Local IPA Draft", description: "Rotating local craft IPA on tap", price: 7.99, category: "Beer & Wine", icon: Beer },
  { id: 15, name: "House Lager", description: "Crisp, refreshing house lager", price: 5.99, category: "Beer & Wine", icon: Beer },
  { id: 16, name: "Glass of Wine", description: "Choose from our curated wine list", price: 8.99, category: "Beer & Wine", icon: Wine },
  { id: 17, name: "The Pickle Margarita", description: "Tequila, pickle brine, lime, tajín rim", price: 11.99, category: "Beer & Wine", icon: Wine, popular: true },
  { id: 18, name: "Açaí Bowl", description: "Açaí, granola, banana, berries, honey drizzle", price: 11.99, category: "Desserts", icon: CakeSlice },
  { id: 19, name: "Cookie Skillet", description: "Fresh-baked chocolate chip cookie with vanilla ice cream", price: 8.99, category: "Desserts", icon: IceCreamCone },
];

const categoryIcons: Record<string, React.ElementType> = {
  "Smoothies & Drinks": Coffee,
  "Snacks & Bites": Utensils,
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
      <div className="bg-gradient-to-r from-amber-600 to-orange-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-white flex items-center gap-3 uppercase">
            <UtensilsCrossed className="h-8 w-8" aria-hidden="true" /> Food & Drinks
          </h1>
          <p className="mt-3 text-lg text-white/80">
            Fuel up before your match or celebrate after. Order ahead for courtside pickup!
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <nav className="lg:col-span-1" aria-label="Menu categories">
            <div className="sticky top-24 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Menu</h3>
              {categories.map((cat) => {
                const Icon = categoryIcons[cat] || UtensilsCrossed;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    aria-current={activeCategory === cat ? "true" : undefined}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-colors duration-200 ${
                      activeCategory === cat
                        ? "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
                        : "hover:bg-surface text-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {cat}
                  </button>
                );
              })}

              {orderCount > 0 && (
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-700 p-5 text-white">
                  <div className="flex items-center gap-2 font-semibold">
                    <ShoppingCart className="h-4 w-4" aria-hidden="true" />
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
                  <button className="mt-4 w-full rounded-full bg-white text-amber-700 py-2.5 font-bold hover:bg-amber-100 transition-colors duration-200">
                    Place Order
                  </button>
                </div>
              )}
            </div>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-[var(--font-display)] text-2xl font-bold mb-6 uppercase">{activeCategory}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {menu
                .filter((m) => m.category === activeCategory)
                .map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-amber-300 hover:shadow-md transition-all duration-200"
                    >
                      <div className="shrink-0 mt-1 p-2 rounded-xl bg-amber-100 dark:bg-amber-900/20">
                        <ItemIcon className="h-6 w-6 text-amber-600" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-sm">
                              {item.name}
                              {item.popular && (
                                <span className="ml-2 inline-block text-xs bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 px-2 py-0.5 rounded-full font-medium">
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
                                  aria-label={`Remove one ${item.name}`}
                                  className="p-1.5 rounded-full bg-surface hover:bg-surface-dark transition-colors duration-200"
                                >
                                  <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                                </button>
                                <span className="text-sm font-semibold w-6 text-center" aria-label={`${order[item.id]} in order`}>
                                  {order[item.id]}
                                </span>
                                <button
                                  onClick={() => updateOrder(item.id, 1)}
                                  aria-label={`Add another ${item.name}`}
                                  className="p-1.5 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors duration-200"
                                >
                                  <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => updateOrder(item.id, 1)}
                                aria-label={`Add ${item.name} to order`}
                                className="px-4 py-1.5 rounded-full bg-amber-500 text-white text-xs font-semibold hover:bg-amber-600 transition-colors duration-200"
                              >
                                Add
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
