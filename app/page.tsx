import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Creative Writing</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div className="text-2xl font-bold">Poetry</div>
          <Link href="/poetry">
            <Button>Explore More</Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  )
}

