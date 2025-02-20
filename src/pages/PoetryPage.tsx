"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogPost {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
}

const PoetryPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [newPost, setNewPost] = useState({ title: "", content: "" })
  const navigate = useNavigate()

  useEffect(() => {
    // In a real application, you'd check for an existing session here
    setIsAuthenticated(false)
  }, [])

  const handleLogin = () => {
    if ((username === "KK" && password === "Kavin@2025") || (username === "Tusshar" && password === "Teexmoni248")) {
      setIsAuthenticated(true)
      // In a real application, you'd set a session or token here
    } else {
      alert("Invalid credentials")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newBlogPost: BlogPost = {
      id: Date.now().toString(),
      title: newPost.title,
      content: newPost.content,
      author: username,
      createdAt: new Date().toISOString(),
    }
    setPosts([newBlogPost, ...posts])
    setNewPost({ title: "", content: "" })
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleLogin()
              }}
              className="space-y-4"
            >
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Poetry Blog</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <Input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
          className="mb-4"
        />
        <Textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          required
          className="mb-4"
        />
        <Button type="submit">Create Post</Button>
      </form>
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
              <p className="text-sm text-gray-500 mt-2">
                Posted by {post.author} on {new Date(post.createdAt).toLocaleString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PoetryPage

