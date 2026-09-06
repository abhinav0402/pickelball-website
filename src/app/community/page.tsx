"use client";

import { useState } from "react";
import {
  Users,
  MessageCircle,
  ThumbsUp,
  Send,
  TrendingUp,
  UserPlus,
  MapPin,
  Award,
  User,
} from "lucide-react";

type Post = {
  id: number;
  author: string;
  avatar: React.ElementType;
  time: string;
  content: string;
  likes: number;
  replies: number;
  category: string;
};

const posts: Post[] = [
  {
    id: 1,
    author: "Mike R.",
    avatar: User,
    time: "2 hours ago",
    content: "Anyone want to play doubles tonight around 7pm? I'm a 3.5 looking for a partner and opponents. DM me!",
    likes: 8,
    replies: 5,
    category: "Find a Partner",
  },
  {
    id: 2,
    author: "Lisa K.",
    avatar: User,
    time: "4 hours ago",
    content: "Just switched from the Selkirk to the new CRBN-1X and wow, the control is incredible. Highly recommend for touch players!",
    likes: 23,
    replies: 12,
    category: "Gear Talk",
  },
  {
    id: 3,
    author: "Coach Dave",
    avatar: User,
    time: "6 hours ago",
    content: "Quick tip: On your third-shot drop, focus on a relaxed grip pressure (3 out of 10). Most people squeeze way too hard which kills the soft game. Try it tomorrow!",
    likes: 45,
    replies: 18,
    category: "Tips & Strategy",
  },
  {
    id: 4,
    author: "Sarah M.",
    avatar: User,
    time: "1 day ago",
    content: "Our Tuesday league team just went 4-0! Shoutout to my partner Jake for those insane speed-ups. See everyone next week!",
    likes: 34,
    replies: 9,
    category: "General",
  },
  {
    id: 5,
    author: "Tom W.",
    avatar: User,
    time: "1 day ago",
    content: "Anyone else tried the new Pickle Margarita at the bar? Sounds weird but it's actually amazing!",
    likes: 56,
    replies: 22,
    category: "General",
  },
  {
    id: 6,
    author: "Ana P.",
    avatar: User,
    time: "2 days ago",
    content: "Looking for a 4.0+ women's doubles partner for the Fall Classic tournament. I play aggressive at the net. Let me know!",
    likes: 15,
    replies: 7,
    category: "Find a Partner",
  },
];

const categories = ["All", "General", "Find a Partner", "Gear Talk", "Tips & Strategy"];

const leaderboard = [
  { rank: 1, name: "Carlos M.", rating: "5.0", wins: 47, badge: "gold" },
  { rank: 2, name: "Sarah M.", rating: "4.8", wins: 42, badge: "silver" },
  { rank: 3, name: "Jake T.", rating: "4.7", wins: 38, badge: "bronze" },
  { rank: 4, name: "Lisa K.", rating: "4.5", wins: 35, badge: "" },
  { rank: 5, name: "Mike R.", rating: "4.3", wins: 31, badge: "" },
];

const badgeColors: Record<string, string> = {
  gold: "bg-amber-100 text-amber-700 border-amber-300",
  silver: "bg-gray-100 text-gray-600 border-gray-300",
  bronze: "bg-orange-100 text-orange-700 border-orange-300",
};

export default function Community() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [newPost, setNewPost] = useState("");
  const [localPosts, setLocalPosts] = useState(posts);

  const filteredPosts = localPosts.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const handlePost = () => {
    if (!newPost.trim()) return;
    const post: Post = {
      id: Date.now(),
      author: "You",
      avatar: User,
      time: "Just now",
      content: newPost,
      likes: 0,
      replies: 0,
      category: "General",
    };
    setLocalPosts([post, ...localPosts]);
    setNewPost("");
  };

  const handleLike = (id: number) => {
    setLocalPosts(
      localPosts.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-gradient-to-r from-red-800 to-rose-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-white flex items-center gap-3 uppercase">
            <Users className="h-8 w-8" aria-hidden="true" /> Community
          </h1>
          <p className="mt-3 text-lg text-white/80">
            Connect with fellow players, find partners, share tips, and stay in the loop.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {/* New post */}
            <div className="rounded-2xl border border-border p-5 bg-card">
              <label htmlFor="new-post" className="sr-only">Share something with the community</label>
              <textarea
                id="new-post"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share something with the community..."
                rows={3}
                className="w-full resize-none rounded-xl border border-border bg-surface p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              <div className="mt-3 flex justify-end">
                <button
                  onClick={handlePost}
                  disabled={!newPost.trim()}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-on-primary text-sm font-semibold hover:bg-primary-dark disabled:opacity-40 transition-colors duration-200"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Post
                </button>
              </div>
            </div>

            {/* Category filter */}
            <div className="flex gap-2 overflow-x-auto pb-1" role="radiogroup" aria-label="Filter posts">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  role="radio"
                  aria-checked={activeCategory === cat}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-on-primary"
                      : "bg-surface text-muted hover:bg-surface-dark"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => {
                const AvatarIcon = post.avatar;
                return (
                  <article
                    key={post.id}
                    className="rounded-2xl border border-border p-5 bg-card hover:border-primary/20 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <AvatarIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{post.author}</div>
                        <div className="text-xs text-muted">{post.time}</div>
                      </div>
                      <span className="ml-auto text-xs bg-surface px-2.5 py-1 rounded-full text-muted font-medium">
                        {post.category}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed">{post.content}</p>
                    <div className="mt-4 flex items-center gap-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        aria-label={`Like, ${post.likes} likes`}
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors duration-200"
                      >
                        <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                        {post.likes}
                      </button>
                      <button
                        aria-label={`Replies, ${post.replies} replies`}
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors duration-200"
                      >
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        {post.replies}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border p-6 bg-card">
              <h3 className="font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />
                Leaderboard
              </h3>
              <ol className="mt-4 space-y-3">
                {leaderboard.map((player) => (
                  <li key={player.rank} className="flex items-center gap-3 text-sm">
                    <span className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold border ${
                      player.badge ? badgeColors[player.badge] : "bg-surface text-muted border-border"
                    }`}>
                      {player.rank}
                    </span>
                    <div className="flex-1">
                      <div className="font-medium">{player.name}</div>
                      <div className="text-xs text-muted">
                        Rating {player.rating} &middot; {player.wins} wins
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-border p-6 bg-card">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium bg-surface hover:bg-surface-dark text-left transition-colors duration-200">
                  <UserPlus className="h-4 w-4 text-primary" aria-hidden="true" />
                  Find a Playing Partner
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium bg-surface hover:bg-surface-dark text-left transition-colors duration-200">
                  <Award className="h-4 w-4 text-primary" aria-hidden="true" />
                  View Full Rankings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium bg-surface hover:bg-surface-dark text-left transition-colors duration-200">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  Open Play Schedule
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-red-700 to-rose-900 p-6 text-white">
              <h3 className="font-[var(--font-display)] font-bold uppercase">Community Stats</h3>
              <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">523</div>
                  <div className="text-xs text-white/70">Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1.2K</div>
                  <div className="text-xs text-white/70">Posts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">89</div>
                  <div className="text-xs text-white/70">Online Now</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">47</div>
                  <div className="text-xs text-white/70">Events / Month</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
