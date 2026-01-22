import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "@/api/blogs"
import BlogCard from "./BlogCard"
import { Blog } from "@/types/blog"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogList({ onSelect }: { onSelect: (id: number) => void }) {
  const { data, isLoading, error } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  if (isLoading)
    return <Skeleton className="h-40 w-full" />

  if (error)
    return <p className="text-red-500">Error loading blogs</p>

  return (
    <div className="space-y-4">
      {data?.map(blog => (
        <BlogCard key={blog.id} blog={blog} onClick={onSelect} />
      ))}
    </div>
  )
}
