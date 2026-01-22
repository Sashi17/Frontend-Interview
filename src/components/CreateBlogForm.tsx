import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBlog } from "@/api/blogs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CreateBlogForm() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  mutation.mutate({
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    content: formData.get("content") as string,
    coverImage: (formData.get("coverImage") as string) || "",
    category: ["GENERAL"],
    date: new Date().toISOString(),
  })

  e.currentTarget.reset()
}


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="title" placeholder="Title" required />
      <Input name="coverImage" placeholder="Cover Image URL" />
      <Textarea name="description" placeholder="Short description" required />
      <Textarea name="content" placeholder="Blog content" required />
      <Button type="submit">Create Blog</Button>
    </form>
  )
}
