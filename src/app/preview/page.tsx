'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, RotateCcw, Send, ArrowLeft, Code2 } from 'lucide-react'
import DemoLayout from '@/components/DemoLayout'

export default function Preview() {
  const [feedback, setFeedback] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [apiResponse, setApiResponse] = useState<{
    status: string;
    id: number;
    message: string;
    timestamp: string;
    data: { feedback: string; processed: boolean };
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedback.trim()) return

    setIsSubmitting(true)
    
    // Simulate API call with delay
    setTimeout(() => {
      const mockResponse = {
        status: 'success',
        id: 12345,
        message: 'Thank you for your feedback!',
        timestamp: new Date().toISOString(),
        data: {
          feedback: feedback,
          processed: true
        }
      }
      
      setApiResponse(mockResponse)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setShowSuccessMessage(true)
      setFeedback('') // Clear form as configured
    }, 2000)
  }

  const resetDemo = () => {
    setFeedback('')
    setIsSubmitted(false)
    setIsSubmitting(false)
    setShowSuccessMessage(false)
    setApiResponse(null)
  }

  return (
    <DemoLayout 
      title="Response Preview" 
      description="See how your API responses update the UI in real-time"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Live Preview */}
        <div className="bg-white rounded-lg shadow-lg border">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-lg font-semibold text-gray-900">Live Preview</h3>
            <p className="text-sm text-gray-600">Interactive demo of your connected components</p>
          </div>
          
          <div className="p-8">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Feedback Form Demo
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter your feedback...
                  </label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    placeholder="Share your thoughts with us..."
                    disabled={isSubmitting}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || !feedback.trim()}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Feedback
                    </>
                  )}
                </button>
              </form>

              {/* Success Message (Connected to API Response) */}
              {showSuccessMessage && apiResponse && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">
                      {apiResponse.message}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-green-700">
                    Submission ID: #{apiResponse.id}
                  </div>
                </div>
              )}

              {/* Reset Button */}
              {isSubmitted && (
                <button
                  onClick={resetDemo}
                  className="mt-4 w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Try Again
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Real-time Data Flow */}
        <div className="space-y-6">
          {/* API Request Preview */}
          <div className="bg-white rounded-lg shadow-lg border">
            <div className="border-b border-gray-200 px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Code2 className="h-5 w-5 mr-2 text-blue-600" />
                API Request
              </h3>
            </div>
            <div className="p-6">
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                <div className="text-blue-400 mb-2">POST https://api.mysite.com/feedback</div>
                <div className="text-gray-400">Headers:</div>
                <div className="ml-2 text-gray-300">
                  Content-Type: application/json<br />
                  Authorization: Bearer YOUR_API_KEY
                </div>
                <div className="text-gray-400 mt-2">Body:</div>
                <div className="ml-2 text-gray-300">
                  {feedback ? (
                    <pre>{JSON.stringify({
                      message: feedback,
                      timestamp: new Date().toISOString()
                    }, null, 2)}</pre>
                  ) : (
                    <div className="italic text-gray-500">
                      Enter feedback to see request body...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* API Response Preview */}
          <div className="bg-white rounded-lg shadow-lg border">
            <div className="border-b border-gray-200 px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900">API Response</h3>
            </div>
            <div className="p-6">
              {apiResponse ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="text-green-800 font-medium mb-2">
                    ✅ 200 OK - Response received
                  </div>
                  <pre className="text-sm text-green-700 bg-green-100 p-3 rounded overflow-x-auto">
                    {JSON.stringify(apiResponse, null, 2)}
                  </pre>
                </div>
              ) : isSubmitting ? (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="text-yellow-800 font-medium mb-2">
                    ⏳ Waiting for response...
                  </div>
                  <div className="text-sm text-yellow-700">
                    API call in progress
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-gray-600 text-center">
                    Submit the form to see API response
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* UI Updates Triggered */}
          <div className="bg-white rounded-lg shadow-lg border">
            <div className="border-b border-gray-200 px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900">UI Updates Triggered</h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className={`p-3 rounded-lg border ${showSuccessMessage ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Show Success Message</span>
                    {showSuccessMessage ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                    )}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Display response.message to user
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg border ${isSubmitted ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Clear Form Fields</span>
                    {isSubmitted ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                    )}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Reset textarea value to empty
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg border ${isSubmitting ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Disable Submit Button</span>
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600"></div>
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                    )}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Prevent duplicate submissions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between items-center bg-white rounded-lg shadow-lg p-6 border">
        <Link
          href="/api-connect"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to API Connect
        </Link>
        
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-900 mb-1">
            🎉 Demo Complete!
          </div>
          <p className="text-sm text-gray-600">
            You&apos;ve seen how Backend Bridge connects UI to APIs
          </p>
        </div>
        
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Over
        </Link>
      </div>
    </DemoLayout>
  )
}
