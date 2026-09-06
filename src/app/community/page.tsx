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
} from "lucide-react";

type Post = {
  id: number;
  author: string;
  avatar: string;
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
    avatar: "🧑‍🦱",
    time: "2 hours ago",
    content: "Anyone want to play doubles tonight around 7pm? I'm a 3.5 looking for a partner and opponents. DM me!",
    likes: 8,
    replies: 5,
    category: "Find a Partner",
  },
  {
    id: 2,
    author: "Lisa K.",
    avatar: "👩‍🦰",
    time: "4 hours ago",
    content: "Just switched from the Selkirk to the new CRBN-1X and wow, the control is incredible. Highly recommend for touch players!",
    likes: 23,
    replies: 12,
    category: "Gear Talk",
  },
  {
    id: 3,
    author: "Coach Dave",
    avatar: "🧔",
    time: "6 hours ago",
    content: "Quick tip: On your third-shot drop, focus on a relaxed grip pressure (3 out of 10). Most people squeeze way too hard which kills the soft game. Try it tomorrow!",
    likes: 45,
    replies: 18,
    category: "Tips & Strategy",
  },
  {
    id: 4,
    author: "Sarah M.",
    avatar: "👩",
    time: "1 day ago",
    content: "Our Tuesday league team just went 4-0! Shoutout to my partner Jake for those insane speed-ups. See everyone next week 🏆",
    likes: 34,
    replies: 9,
    category: "General",
  },
  {
    id: 5,
    author: "Tom W.",
    avatar: "👨‍🦳",
    time: "1 day ago",
    content: "Anyone else tried the new Pickle Margarita at the bar? Sounds weird but it's actually amazing 😂🍹",
    likes: 56,
    replies: 22,
    category: "General",
  },
  {
    id: 6,
    author: "Ana P.",
    avatar: "👩‍🦱",
    time: "2 days ago",
    content: "Looking for a 4.0+ women's doubles partner for the Fall Classic tournament. I play aggressive at the net. Let me know!",
    likes: 15,
    replies: 7,
    category: "Find a Partner",
  },
];

const categories = ["All", "General", "Find a Partner", "Gear Talk", "Tips & Strategy"];

const leaderboard = [
  { rank: 1, name: "Carlos M.", rating: "5.0", wins: 47, emoji: "🥇" },
  { rank: 2, name: "Sarah M.", rating: "4.8", wins: 42, emoji: "🥈" },
  { rank: 3, name: "Jake T.", rating: "4.7", wins: 38, emoji: "🥉" },
  { rank: 4, name: "Lisa K.", rating: "4.5", wins: 35, emoji: "4" },
  { rank: 5, name: "Mike R.", rating: "4.3", wins: 31, emoji: "5" },
];

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
      avatar: "😊",
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
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
            <Users className="h-8 w-8" /> Community
          </h1>
          <p className="mt-3 text-lg text-white/80">
            Connect with fellow players, find partners, share tips, and stay in the loop.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* New post */}
            <div className="rounded-2xl border border-border p-5 bg-background">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share something with the community..."
                rows={3}
                className="w-full resize-none rounded-xl border border-border bg-surface p-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500"
              />
              <div className="mt-3 flex justify-end">
                <button
                  onClick={handlePost}
                  disabled={!newPost.trim()}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Post
                </button>
              </div>
            </div>

            {/* Category filter */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? "bg-purple-600 text-white"
                      : "bg-surface text-muted hover:bg-surface-dark"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl border border-border p-5 bg-background hover:border-purple-300/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{post.avatar}</div>
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
                      className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-purple-600 transition-colors"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      {post.likes}
                    </button>
                    <button className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-purple-600 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      {post.replies}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <div className="rounded-2xl border border-border p-6 bg-background">
              <h3 className="font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                Leaderboard
              </h3>
              <ul className="mt-4 space-y-3">
                {leaderboard.map((player) => (
                  <li
                    key={player.rank}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="text-lg w-7 text-center">{player.emoji}</span>
                    <div className="flex-1">
                      <div className="font-medium">{player.name}</div>
                      <div className="text-xs text-muted">
                        Rating {player.rating} &middot; {player.wins} wins
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border border-border p-6 bg-background">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium bg-surface hover:bg-surface-dark text-left transition-colors">
                  <UserPlus className="h-4 w-4 text-purple-600" />
                  Find a Playing Partner
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium bg-surface hover:bg-surface-dark text-left transition-colors">
                  <Award className="h-4 w-4 text-purple-600" />
                  View Full Rankings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium bg-surface hover:bg-surface-dark text-left transition-colors">
                  <MapPin className="h-4 w-4 text-purple-600" />
                  Open Play Schedule
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 p-6 text-white">
              <h3 className="font-semibold">Community Stats</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}
