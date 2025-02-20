import type React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Index: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Creative Writing</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div className="text-2xl font-bold">Poetry</div>
          <Link to="/poetry">
            <Button>Explore More</Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  )
}

export default Index

