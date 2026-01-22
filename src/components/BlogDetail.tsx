import { useQuery } from "@tanstack/react-query"
import { getBlogById } from "@/api/blogs"
import { Badge } from "@/components/ui/badge"
import { Blog } from "@/types/blog"


export default function BlogDetail({ blogId }: { blogId: number | null }) {
  const { data, isLoading } = useQuery<Blog>({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  })

  if (!blogId)
    return (
      <div className="text-center text-muted-foreground mt-20">
        Select a blog to read
      </div>
    )

  if (isLoading) return <p>Loading...</p>

  return (
    <article className="space-y-6">
      {/* Cover Image */}
      <img
        src={data?.coverImage}
        alt={data?.title}
        className="w-full h-64 object-cover rounded-xl"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold">{data?.title}</h1>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex gap-2">
          {data?.category?.map((cat) => (
            <Badge key={cat}>{cat}</Badge>
          ))}
        </div>
        <span>|</span>
        <span>{data?.date && new Date(data.date).toDateString()}</span>
      </div>

      {/* Description */}
      <p className="text-lg text-muted-foreground">
        {data?.description}
      </p>

      {/* Content */}
      <div className="prose max-w-none">
        {data?.content}
      </div>
    </article>
  )
}
