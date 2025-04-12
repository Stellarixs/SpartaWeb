import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"

export default function UpdateNotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gold mb-6">Update Not Found</h1>
        <div className="w-20 h-1 bg-red-900 mb-8"></div>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
          The update you're looking for doesn't exist or has been removed. Check the updates page for the latest
          information.
        </p>

        <Link href="/updates">
          <button className="bg-red-900 hover:bg-red-800 text-gold px-6 py-3 rounded-lg border border-gold/30 transition-colors flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Updates
          </button>
        </Link>
      </div>
    </div>
  )
}
