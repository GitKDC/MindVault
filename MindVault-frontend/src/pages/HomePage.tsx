import { Suspense } from "react"
import { Brain, Search, FolderKanban, Share2, ArrowRight, Link2, Youtube, FileText, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

function HomePageContent() {
  const navigate = useNavigate();

  const signin = () => {
    navigate("/signin")
  }
  const signup = () => {
    navigate("/signup")
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Brain className="size-8 text-violet-600" />
            <span className="text-xl font-semibold">MindVault</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-neutral-600 hover:text-neutral-900">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-neutral-600 hover:text-neutral-900">
              How it works
            </a>
            <a href="#pricing" className="text-sm text-neutral-600 hover:text-neutral-900">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button onClick={signin} variant="ghost" className="text-sm">
              Sign in
            </Button>
            <Button onClick={signup} className="bg-violet-600 text-sm text-white hover:bg-violet-700">Get started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm text-violet-700">
            <span className="size-2 animate-pulse rounded-full bg-violet-500" />
            Your second brain for the internet
          </div>
          <h1 className="mb-6 text-balance font-serif text-5xl font-normal leading-tight tracking-tight md:text-7xl">
            Capture. Organize. Remember everything.
          </h1>
          <p className="mb-10 text-balance text-lg leading-relaxed text-neutral-600 md:text-xl">
            MindVault is your intelligent knowledge hub. Save links, articles, videos, and notes from anywhere on the
            web. Search instantly. Share effortlessly.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-violet-600 text-white hover:bg-violet-700">
              Start organizing for free
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-neutral-300 bg-transparent">
              Watch demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-neutral-500">Free forever. No credit card required.</p>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-100/40 to-transparent blur-3xl" />
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl">
            <div className="border-b border-neutral-200 bg-neutral-100 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-400" />
                <div className="size-3 rounded-full bg-yellow-400" />
                <div className="size-3 rounded-full bg-green-400" />
              </div>
            </div>
            <img src="/images/image.png" alt="MindVault Dashboard Interface" className="w-full" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="border-y border-neutral-200 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance font-serif text-4xl font-normal tracking-tight md:text-5xl">
              Everything you need to manage knowledge
            </h2>
            <p className="text-balance text-lg text-neutral-600">
              Built for speed, designed for clarity, optimized for productivity
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-neutral-200 p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-violet-100">
                <Bookmark className="size-6 text-violet-600" />
              </div>
              <h3 className="mb-2 font-semibold">Universal capture</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Save anything from any website with our browser extension or mobile app. One click, perfectly organized.
              </p>
            </Card>

            <Card className="border-neutral-200 p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-violet-100">
                <Search className="size-6 text-violet-600" />
              </div>
              <h3 className="mb-2 font-semibold">Instant search</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Find what you need in milliseconds. Full-text search across all your saved content, tags, and notes.
              </p>
            </Card>

            <Card className="border-neutral-200 p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-violet-100">
                <FolderKanban className="size-6 text-violet-600" />
              </div>
              <h3 className="mb-2 font-semibold">Smart organization</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Organize by source, type, or custom categories. Auto-tagging keeps everything structured without effort.
              </p>
            </Card>

            <Card className="border-neutral-200 p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-violet-100">
                <Share2 className="size-6 text-violet-600" />
              </div>
              <h3 className="mb-2 font-semibold">Effortless sharing</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Share your brain with teammates or the world. Create public collections or private shared workspaces.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance font-serif text-4xl font-normal tracking-tight md:text-5xl">
              Save everything that matters
            </h2>
            <p className="text-balance text-lg text-neutral-600">
              From videos to articles, tweets to code snippets — if it's on the web, it's in your vault
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Link2, label: "Links", desc: "Websites & URLs", color: "bg-blue-100 text-blue-700" },
              { icon: Youtube, label: "Videos", desc: "YouTube & more", color: "bg-red-100 text-red-700" },
              { icon: FileText, label: "Articles", desc: "Blogs & docs", color: "bg-green-100 text-green-700" },
              { icon: Brain, label: "Notes", desc: "Your thoughts", color: "bg-violet-100 text-violet-700" },
            ].map((item) => (
              <div
                key={item.label}
                className="group rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:shadow-lg"
              >
                <div className={`mb-4 inline-flex size-12 items-center justify-center rounded-lg ${item.color}`}>
                  <item.icon className="size-6" />
                </div>
                <h3 className="mb-1 font-semibold">{item.label}</h3>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-neutral-200 bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-violet-600">50K+</div>
              <div className="text-sm text-neutral-600">Active users</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-violet-600">2M+</div>
              <div className="text-sm text-neutral-600">Items saved</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-violet-600">99.9%</div>
              <div className="text-sm text-neutral-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 px-8 py-16 text-center text-white md:px-16">
            <h2 className="mb-4 text-balance font-serif text-4xl font-normal tracking-tight md:text-5xl">
              Start building your knowledge vault today
            </h2>
            <p className="mb-8 text-balance text-lg text-violet-100">
              Join thousands of knowledge workers, researchers, and creators who've made MindVault their second brain.
            </p>
            <Button size="lg" className="bg-white text-violet-700 hover:bg-neutral-100">
              Get started for free
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Brain className="size-6 text-violet-600" />
                <span className="font-semibold">MindVault</span>
              </div>
              <p className="text-sm text-neutral-600">Your intelligent knowledge hub for the modern web.</p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    Chrome extension
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
            © 2025 MindVault. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomePageContent />
    </Suspense>
  )
}
