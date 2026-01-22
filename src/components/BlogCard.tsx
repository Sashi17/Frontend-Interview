import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Blog } from "@/types/blog"

interface BlogCardProps {
  blog: Blog
  onClick: (id: number) => void
}

export default function BlogCard({ blog, onClick }: BlogCardProps) {
  return (
    <Card
      onClick={() => onClick(blog.id)}
      className="cursor-pointer hover:border-primary transition"
    >
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {blog.category.map((cat) => (
              <Badge key={cat} variant="secondary">
                {cat}
              </Badge>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {new Date(blog.date).toLocaleDateString()}
          </span>
        </div>

        <h2 className="font-semibold">{blog.title}</h2>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  )
}
