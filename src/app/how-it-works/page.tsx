"use client";

import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Link as LinkIcon,
  Code,
  Play,
  CheckCircle,
  AlertTriangle,
  Users,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How This Thing Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            So I built this prototype to show what could be possible if Lovable
            could connect to real backends. Took me a weekend, but I think it
            demonstrates the potential pretty well.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
              <span className="font-semibold text-yellow-800">
                The Current Problem
              </span>
            </div>
            <p className="text-sm text-yellow-700">
              Right now, Lovable makes gorgeous designs but they&apos;re
              basically just pretty pictures. Want your form to actually submit
              somewhere? You need a developer.
            </p>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
            What I&apos;m Proposing
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Keep The Good Stuff</h3>
              <p className="text-sm opacity-90">
                All the drag-and-drop magic that makes Lovable awesome
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LinkIcon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Add Real Connections</h3>
              <p className="text-sm opacity-90">
                Point and click to connect components to actual APIs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Get Working Apps</h3>
              <p className="text-sm opacity-90">
                Ship functional products that people can actually use
              </p>
            </div>
          </div>
        </div>

        {/* 3-Step Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            3-Step Demo Flow
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-blue-50 px-8 py-6 border-b border-blue-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        UI Builder Canvas
                      </h3>
                      <p className="text-gray-600">
                        Drag & drop components to build your interface
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/dashboard"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    Try It <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What You Can Do:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Drag buttons, inputs, and text labels onto canvas
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Position components visually with grid snapping
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Edit component properties and labels
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Select components to configure API connections
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Demo Example:
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-3">
                        Build a feedback form:
                      </p>
                      <div className="space-y-2">
                        <div className="bg-white border border-gray-300 px-3 py-2 rounded text-sm">
                          Enter your feedback...
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                          Submit Feedback
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-green-50 px-8 py-6 border-b border-green-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Connect to API
                      </h3>
                      <p className="text-gray-600">
                        Link your components to real backend endpoints
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/api-connect"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
                  >
                    Try It <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Configuration Options:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Set HTTP method (GET, POST, PUT, DELETE)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Configure API endpoint URL
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Map form data to request body
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Add authentication headers
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Test API calls with live responses
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Code Generation:
                    </h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs">
                      <div className="text-green-400">
                        {/* Auto-generated code */}
                      </div>
                      <div className="text-blue-400">
                        const handleSubmit = async () =&gt; {`{`}
                      </div>
                      <div className="ml-2 text-gray-300">
                        await fetch(&apos;/api/feedback&apos;, {`{`}
                      </div>
                      <div className="ml-4 text-gray-300">
                        method: &apos;POST&apos;,
                      </div>
                      <div className="ml-4 text-gray-300">
                        body: JSON.stringify(data)
                      </div>
                      <div className="ml-2 text-gray-300">{`}`})</div>
                      <div className="text-blue-400">{`}`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-purple-50 px-8 py-6 border-b border-purple-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Preview Response
                      </h3>
                      <p className="text-gray-600">
                        See real-time API responses and UI updates
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/preview"
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center"
                  >
                    Try It <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Live Testing:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                        Interactive form that actually works
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                        Real-time API request/response display
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                        Automatic UI updates based on responses
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                        Error handling and loading states
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      UI Reactions:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center p-2 bg-green-50 border border-green-200 rounded">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-sm">Show success message</span>
                      </div>
                      <div className="flex items-center p-2 bg-blue-50 border border-blue-200 rounded">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-sm">Clear form fields</span>
                      </div>
                      <div className="flex items-center p-2 bg-yellow-50 border border-yellow-200 rounded">
                        <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                        <span className="text-sm">Update button states</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="h-6 w-6 mr-3 text-blue-600" />
            Technical Implementation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Frontend Technologies:
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • <strong>Next.js 15</strong> with TypeScript for the
                  framework
                </li>
                <li>
                  • <strong>Tailwind CSS</strong> for Lovable-style design
                  system
                </li>
                <li>
                  • <strong>@dnd-kit</strong> for drag-and-drop interactions
                </li>
                <li>
                  • <strong>Framer Motion</strong> for smooth animations
                </li>
                <li>
                  • <strong>Lucide React</strong> for professional icons
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Key Features:
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • <strong>Visual API Builder</strong> - No code required
                </li>
                <li>
                  • <strong>Real-time Testing</strong> - Test APIs before
                  publishing
                </li>
                <li>
                  • <strong>Code Generation</strong> - See React code created
                </li>
                <li>
                  • <strong>Response Handling</strong> - Configure UI reactions
                </li>
                <li>
                  • <strong>Error Management</strong> - Handle edge cases
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Value Proposition for Lovable
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Increase Retention</h3>
              <p className="text-sm opacity-90">
                Users build functional apps, not just prototypes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Expand Market</h3>
              <p className="text-sm opacity-90">
                Appeal to indie developers and small businesses
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Differentiate</h3>
              <p className="text-sm opacity-90">
                No other design tool offers this integration
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Revenue Growth</h3>
              <p className="text-sm opacity-90">
                Premium feature for advanced functionality
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Backend Bridge?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Try the complete demo flow — it takes just 2-3 minutes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              Start the Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/"
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
