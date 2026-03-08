import { useState } from "react";
import { learnArticles, learnCategories } from "../data/learnData";
import Badge from "../components/common/Badge";

// ── Individual article card ───────────────────────────
function ArticleCard({ article }) {
  return (
    <div className="bg-white border border-cb-border rounded-2xl overflow-hidden
                    hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
      {/* Thumbnail */}
      <div className="aspect-video overflow-hidden bg-cb-surface">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            // Fallback gradient if image fails to load
            e.target.style.display = "none";
            e.target.parentNode.style.background =
              "linear-gradient(135deg, #EBF0FF 0%, #C8D7FF 100%)";
          }}
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="blue">{article.category}</Badge>
          <span className="text-xs text-cb-muted">{article.readTime}</span>
        </div>
        <h3 className="font-bold text-cb-dark text-base leading-snug mb-2 group-hover:text-cb-blue transition-colors">
          {article.title}
        </h3>
        <p className="text-cb-gray text-sm leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-4 flex items-center text-cb-blue text-sm font-semibold">
          Read article
          <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
        </div>
      </div>
    </div>
  );
}

export default function Learn() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? learnArticles
      : learnArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-cb-blue-light to-white border-b border-cb-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-cb-dark mb-4">
            Learn crypto
          </h1>
          <p className="text-cb-gray text-lg max-w-xl mx-auto">
            Explore guides, articles, and tutorials to build your crypto knowledge
            from beginner to expert.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── Category filter pills ─────────────────── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {learnCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                ${
                  activeCategory === cat
                    ? "bg-cb-blue text-white"
                    : "bg-cb-surface text-cb-gray hover:bg-gray-200 border border-cb-border"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Article grid ─────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-cb-muted">
            No articles found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
