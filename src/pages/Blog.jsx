import { useState } from "react";
import Badge from "../components/common/Badge";

const categories = ["All", "Company news", "Product", "Policy", "Engineering", "Education"];

const posts = [
  { id: 1, cat: "Product",      title: "Introducing Advanced Trade: The new home for pro trading on Coinbase",             excerpt: "We're launching a dedicated Advanced Trade experience with new charts, order types, and a redesigned interface built for serious traders.",                      date: "Mar 5, 2026",  readTime: "4 min",  img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80", featured: true },
  { id: 2, cat: "Company news", title: "Coinbase Q4 2025 Shareholder Letter",                                              excerpt: "Our fourth quarter results exceeded expectations, with $2.4B in revenue driven by strong retail and institutional trading volume.",                         date: "Feb 20, 2026", readTime: "8 min",  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { id: 3, cat: "Policy",       title: "Our vision for crypto regulation in 2026",                                         excerpt: "Clear, sensible regulation of cryptocurrency is critical for the industry's long-term health. Here's what we're advocating for.",                           date: "Feb 14, 2026", readTime: "6 min",  img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80" },
  { id: 4, cat: "Engineering",  title: "How we built Base: Ethereum's fastest-growing L2",                                 excerpt: "A deep dive into the architecture, design decisions, and scaling challenges we solved while building Base.",                                               date: "Feb 8, 2026",  readTime: "12 min", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" },
  { id: 5, cat: "Education",    title: "Bitcoin hits new highs: what it means for your portfolio",                         excerpt: "Bitcoin recently crossed $95,000. We break down the drivers behind the rally and what long-term holders should know.",                                       date: "Jan 30, 2026", readTime: "5 min",  img: "https://images.unsplash.com/photo-1609554496796-c345a5335ceb?w=600&q=80" },
  { id: 6, cat: "Product",      title: "Coinbase One is now available in 35 new countries",                                excerpt: "We're expanding our premium membership to more markets, bringing zero-fee trading and boosted rewards to more customers worldwide.",                         date: "Jan 22, 2026", readTime: "3 min",  img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80" },
  { id: 7, cat: "Company news", title: "Welcoming our new Chief Product Officer",                                          excerpt: "We're thrilled to announce that Sarah Chen is joining Coinbase as our new CPO, bringing 15 years of fintech and product leadership experience.",             date: "Jan 15, 2026", readTime: "2 min",  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
  { id: 8, cat: "Engineering",  title: "Scaling to 100M users: lessons from Coinbase's infrastructure journey",            excerpt: "How we've evolved our platform architecture to handle billions of dollars in daily transactions while maintaining reliability.",                            date: "Jan 8, 2026",  readTime: "10 min", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" },
];

function FeaturedPost({ post }) {
  return (
    <div className="bg-white border border-cb-border rounded-2xl overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer group md:flex">
      <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-cb-surface">
        <img src={post.img} alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.style.display = "none"; }} />
      </div>
      <div className="p-7 md:w-1/2 flex flex-col justify-center">
        <Badge variant="blue" className="w-fit mb-3">{post.cat}</Badge>
        <h2 className="text-xl md:text-2xl font-bold text-cb-dark leading-snug mb-3 group-hover:text-cb-blue transition-colors">
          {post.title}
        </h2>
        <p className="text-cb-gray text-sm leading-relaxed mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-3 text-xs text-cb-muted">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
    </div>
  );
}

function PostCard({ post }) {
  return (
    <div className="bg-white border border-cb-border rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
      <div className="aspect-video overflow-hidden bg-cb-surface">
        <img src={post.img} alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.style.display = "none"; }} />
      </div>
      <div className="p-5">
        <Badge variant="blue" className="mb-3">{post.cat}</Badge>
        <h3 className="font-bold text-cb-dark leading-snug mb-2 group-hover:text-cb-blue transition-colors">
          {post.title}
        </h3>
        <p className="text-cb-gray text-sm line-clamp-2 mb-3">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-cb-muted">
          <span>{post.date}</span><span>·</span><span>{post.readTime} read</span>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  const filteredRest = activeCategory === "All"
    ? rest
    : rest.filter((p) => p.cat === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-cb-border bg-cb-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-cb-dark mb-1">Coinbase Blog</h1>
          <p className="text-cb-gray">News, product updates, and insights from the Coinbase team.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Featured post */}
        {featured && activeCategory === "All" && (
          <div className="mb-10">
            <FeaturedPost post={featured} />
          </div>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button type="button" key={c} onClick={() => setActiveCategory(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                ${activeCategory === c ? "bg-cb-blue text-white" : "bg-cb-surface text-cb-gray hover:text-cb-dark border border-cb-border"}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Post grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRest.map((post) => <PostCard key={post.id} post={post} />)}
        </div>

        {filteredRest.length === 0 && (
          <div className="text-center py-20 text-cb-muted">No posts in this category.</div>
        )}
      </div>
    </div>
  );
}
