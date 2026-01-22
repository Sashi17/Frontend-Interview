import type { Blog } from "@/types/blog"

const BASE_URL = "http://localhost:3001/blogs"

export const getBlogs = async () => {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error("Failed to fetch blogs")
  return res.json()
}

export const getBlogById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`)
  if (!res.ok) throw new Error("Failed to fetch blog")
  return res.json()
}

export const createBlog = async (blog: Omit<Blog, "id">) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  })
  return res.json()
}
