import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"
import BlogPostForm from "@/components/BlogPostForm"
import BlogPosts from "@/components/BlogPosts"

export default async function PoetryPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/api/auth/signin")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Poetry Blog</h1>
      <BlogPostForm />
      <BlogPosts />
    </div>
  )
}

