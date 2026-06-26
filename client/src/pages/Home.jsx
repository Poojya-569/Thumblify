import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const features = [
  {
    icon: "⚡",
    title: "Instant Generation",
    description:
      "Turn a video title and style into a scroll-stopping thumbnail in seconds with AI-optimized prompts."
  },
  {
    icon: "🎨",
    title: "Style Control",
    description:
      "Pick bold, cinematic, or minimal looks, set color palettes, and choose 16:9, 1:1, or 9:16 ratios."
  },
  {
    icon: "🔄",
    title: "Recreate Mode",
    description:
      "Upload a reference image and refine it with change requests to improve composition and click-through."
  },
  {
    icon: "🌐",
    title: "Community Feed",
    description:
      "Browse public creations, get inspired by trending ideas, and share what you generate with others."
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Tech YouTuber · 120K subs",
    content:
      "Thumblify cut my thumbnail workflow from 45 minutes to under 5. The bold style presets actually look clickable.",
    avatar: "PS",
    rating: 5
  },
  {
    name: "Marcus Lee",
    role: "Gaming Creator",
    content:
      "Recreate mode is a game-changer. I drop in a rough concept and get a polished version without opening Photoshop.",
    avatar: "ML",
    rating: 5
  },
  {
    name: "Ananya Reddy",
    role: "Finance Educator",
    content:
      "Clean UI, simple credits, and the community feed gives me fresh layout ideas every week. Exactly what I needed.",
    avatar: "AR",
    rating: 5
  }
];

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "Free",
    credits: "15 credits",
    features: ["JWT-secured account", "All aspect ratios", "Community access", "Basic styles"]
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9",
    credits: "100 credits / mo",
    popular: true,
    features: [
      "Everything in Starter",
      "Recreate mode",
      "Priority prompt tuning",
      "Higher-res exports"
    ]
  },
  {
    id: "studio",
    name: "Studio",
    price: "$29",
    credits: "500 credits / mo",
    features: [
      "Everything in Pro",
      "Team-ready workflow",
      "Bulk generation",
      "Dedicated support"
    ]
  }
];

const previewThumbnails = [
  {
    title: "I Survived 100 Hours Underground",
    style: "Bold · Red & Yellow",
    gradient: "from-rose-500/80 via-orange-500/60 to-yellow-400/50"
  },
  {
    title: "Learn Python in One Week",
    style: "Minimal · Blue & White",
    gradient: "from-cyan-500/70 via-blue-600/50 to-indigo-500/40"
  },
  {
    title: "Epic Valorant Clutch Moments",
    style: "Cinematic · Neon",
    gradient: "from-fuchsia-500/70 via-purple-600/50 to-violet-400/40"
  }
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5 text-brand-pink">
    {Array.from({ length: count }).map((_, index) => (
      <span key={index} aria-hidden="true">
        ★
      </span>
    ))}
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activePlan, setActivePlan] = useState("pro");
  const [activePreview, setActivePreview] = useState(0);

  const handleGetStarted = () => {
    navigate(isAuthenticated ? "/generate" : "/signup");
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-brand-pink/20 blur-3xl" />
          <div className="absolute right-1/4 top-24 h-72 w-72 rounded-full bg-brand-purple/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-pink/30 bg-brand-pink/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand-pink">
              AI Thumbnail Studio
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Create thumbnails that{" "}
                <span className="gradient-text">stop the scroll</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                Thumblify helps YouTube creators, podcasters, and short-form editors
                generate high-converting thumbnails from a title, style, and color
                palette — no design skills required.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate("/generate")}
                className="rounded-2xl bg-gradient-to-r from-brand-pink to-brand-purple px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
              >
                Generate Now
              </button>
              <button
                type="button"
                onClick={() => navigate("/community")}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-brand-pink/40 hover:bg-white/10"
              >
                View Community
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-2 text-sm text-slate-400">
              <span>✓ 15 free credits on signup</span>
              <span>✓ 16:9, 1:1 & 9:16 ratios</span>
              <span>✓ Secure JWT auth</span>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card overflow-hidden rounded-[32px] p-4 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Live preview</p>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                  AI Ready
                </span>
              </div>

              <div
                className={`relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br ${previewThumbnails[activePreview].gradient}`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(2,6,23,0.85)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    {previewThumbnails[activePreview].style}
                  </p>
                  <h3 className="mt-2 text-xl font-black leading-tight text-white sm:text-2xl">
                    {previewThumbnails[activePreview].title}
                  </h3>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {previewThumbnails.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActivePreview(index)}
                    className={`rounded-xl border px-2 py-2 text-left transition ${
                      activePreview === index
                        ? "border-brand-pink/50 bg-brand-pink/10"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className={`mb-2 h-10 rounded-lg bg-gradient-to-br ${item.gradient}`} />
                    <p className="truncate text-[10px] font-medium text-slate-300">{item.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/10 bg-black/20 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-pink">Features</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Everything you need to ship better thumbnails
            </h2>
            <p className="mt-4 text-slate-300">
              From prompt optimization to community inspiration, Thumblify is built for
              creators who publish often and need consistent quality.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`glass-card rounded-[28px] p-6 transition duration-300 ${
                  hoveredCard === index
                    ? "-translate-y-1 border-brand-pink/30 shadow-glow"
                    : ""
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">How it works</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Three steps to your next viral thumbnail
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Describe your video",
                text: "Enter a title, pick a style, and choose colors that match your channel brand."
              },
              {
                step: "02",
                title: "Let AI optimize",
                text: "Thumblify crafts a production-ready image prompt tuned for clarity and clicks."
              },
              {
                step: "03",
                title: "Download & publish",
                text: "Save to your library, refine with recreate mode, or share to the community feed."
              }
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-[28px] p-6">
                <span className="text-3xl font-black gradient-text">{item.step}</span>
                <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-white/10 bg-black/20 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-pink">Testimonials</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Loved by creators who ship daily
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="glass-card rounded-[28px] p-6">
                <Stars count={item.rating} />
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  &ldquo;{item.content}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-pink to-brand-purple text-sm font-bold text-white">
                    {item.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-slate-400">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-purple">Pricing</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Simple credit-based plans
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Start free with 15 credits. Upgrade when you need more generations for your
              upload schedule.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {plans.map((plan) => (
              <article
                key={plan.id}
                onClick={() => setActivePlan(plan.id)}
                className={`glass-card relative cursor-pointer rounded-[28px] p-6 transition ${
                  activePlan === plan.id
                    ? "border-brand-pink/40 shadow-glow"
                    : "hover:border-white/20"
                } ${plan.popular ? "lg:-translate-y-2" : ""}`}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                ) : null}

                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  {plan.price !== "Free" ? (
                    <span className="pb-1 text-sm text-slate-400">/ month</span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-brand-cyan">{plan.credits}</p>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleGetStarted();
                  }}
                  className={`mt-6 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Get Started
                </button>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-brand-pink">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card rounded-[32px] px-6 py-12 text-center sm:px-10">
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Ready to boost your click-through rate?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Join Thumblify today and generate your first AI-powered thumbnail in under
              a minute. No credit card required to start.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => navigate("/generate")}
                className="rounded-2xl bg-gradient-to-r from-brand-pink to-brand-purple px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
              >
                Generate Your First Thumbnail
              </button>
              {!isAuthenticated ? (
                <Link
                  to="/login"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Log in
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
