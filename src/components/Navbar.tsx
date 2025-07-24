'use client'

import Link from 'next/link'
import { Zap, HelpCircle } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Backend Bridge</h1>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Prototype
            </span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              href="/how-it-works"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              How It Works
            </Link>
            
            <div className="text-sm text-gray-600">
              A Lovable Feature Concept
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
