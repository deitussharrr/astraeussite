import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"

// This is a mock database. In a real application, you'd use a proper database.
const posts: any[] = []

export async function GET() {
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { title, content } = await request.json()

  if (!title || !content) {
    return NextResponse.json({ error: "Missing title or content" }, { status: 400 })
  }

  const newPost = {
    id: Date.now().toString(),
    title,
    content,
    createdAt: new Date().toISOString(),
    author: session.user?.name,
  }

  posts.push(newPost)

  return NextResponse.json(newPost, { status: 201 })
}

