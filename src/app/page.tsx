'use client'

import Link from 'next/link'
import { ArrowRight, Zap, Link as LinkIcon, Eye } from 'lucide-react'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect Your Designs to Real APIs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What if Lovable could do more than just create beautiful interfaces? This prototype 
            shows how we could bridge that final gap between design and functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Canvas Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">UI Builder Canvas</h3>
            <p className="text-gray-600 mb-4">
              Start with the familiar drag-and-drop interface. Add buttons, forms, and inputs 
              just like you normally would.
            </p>
            <Link 
              href="/dashboard" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Try the Canvas <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* API Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <LinkIcon className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect to APIs</h3>
            <p className="text-gray-600 mb-4">
              Here&apos;s where it gets interesting - connect your components to real endpoints. 
              No coding required.
            </p>
            <Link 
              href="/api-connect" 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              Connect APIs <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Preview Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Preview Results</h3>
            <p className="text-gray-600 mb-4">
              Watch your design come to life. Real data, real responses, real user interactions. 
              This is what&apos;s possible.
            </p>
            <Link 
              href="/preview" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
            >
              See Preview <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Demo CTA */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Try the Complete Demo
          </h3>
          <p className="text-gray-600 text-center mb-6">
            I built a feedback form example that shows the whole process from design to deployment. 
            Takes about 3 minutes to walk through.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/dashboard" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all inline-flex items-center"
            >
              Start Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
