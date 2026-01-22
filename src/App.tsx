import { useState } from "react"
import BlogList from "@/components/BlogList"
import BlogDetail from "@/components/BlogDetail"
import CreateBlogForm from "@/components/CreateBlogForm"

export default function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b p-6 text-center">
        <h1 className="text-3xl font-bold">CA Monk Blog</h1>
        <p className="text-muted-foreground mt-2">
          Stay updated with the latest trends in finance, accounting, and career growth
        </p>
      </header>

      {/* Main Layout */}
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 max-w-7xl mx-auto">
        {/* LEFT PANEL */}
        <aside className="md:col-span-4 space-y-6">
          <CreateBlogForm />
          <BlogList onSelect={setSelectedId} />
        </aside>

        {/* RIGHT PANEL */}
        <section className="md:col-span-8">
          <BlogDetail blogId={selectedId} />
        </section>
      </main>
    </div>
  )
}
