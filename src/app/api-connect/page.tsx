'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Code, Play, Settings } from 'lucide-react'
import DemoLayout from '@/components/DemoLayout'

interface APIConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  url: string
  headers: Record<string, string>
  body: string
}

export default function APIConnect() {
  const [selectedComponent] = useState('submit-button')
  const [config, setConfig] = useState<APIConfig>({
    method: 'POST',
    url: 'https://api.mysite.com/feedback',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_TOKEN_HERE'
    },
    body: JSON.stringify({
      message: "{{feedback-input}}",
      timestamp: "{{timestamp}}"
    }, null, 2)
  })
  const [response, setResponse] = useState<{
    status: string;
    id: number;
    message: string;
    timestamp: string;
  } | null>(null)
  const [loading, setLoading] = useState(false)

  const testAPI = async () => {
    setLoading(true)
    // Simulate API call - normally this would be real
    setTimeout(() => {
      const mockResponse = {
        status: 'success',
        id: 12345,
        message: 'Feedback received successfully',
        timestamp: new Date().toISOString()
      }
      setResponse(mockResponse)
      setLoading(false)
    }, 1500)
  }

  return (
    <DemoLayout 
      title="Connect to API" 
      description="Link your UI components to backend endpoints"
    >
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Component Selection */}
        <div className="bg-white rounded-lg shadow-lg p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Settings className="h-5 w-5 mr-2 text-blue-600" />
            Selected Component
          </h3>
          
          <div className="border-2 border-blue-200 bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-blue-900">Submit Button</span>
              <Check className="h-4 w-4 text-green-600" />
            </div>
            <div className="text-sm text-blue-700">
              ID: {selectedComponent}
            </div>
            <div className="text-sm text-blue-700">
              Event: onClick
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-3">Available Data Sources</h4>
            <div className="space-y-2">
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-sm">Text Input (feedback)</div>
                <div className="text-xs text-gray-600">Value: {'{{'} input-feedback-value {'}}'}</div>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-sm">Current User</div>
                <div className="text-xs text-gray-600">ID: {'{{'} user-id {'}}'}</div>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-sm">Timestamp</div>
                <div className="text-xs text-gray-600">Value: {'{{'} current-timestamp {'}}'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* API Configuration */}
        <div className="bg-white rounded-lg shadow-lg p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Code className="h-5 w-5 mr-2 text-green-600" />
            API Configuration
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                HTTP Method
              </label>
              <select
                value={config.method}
                onChange={(e) => setConfig(prev => ({ ...prev, method: e.target.value as APIConfig['method'] }))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="POST">POST</option>
                <option value="GET">GET</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                API Endpoint
              </label>
              <input
                type="url"
                value={config.url}
                onChange={(e) => setConfig(prev => ({ ...prev, url: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://api.example.com/endpoint"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Headers
              </label>
              <textarea
                value={JSON.stringify(config.headers, null, 2)}
                onChange={(e) => {
                  try {
                    const headers = JSON.parse(e.target.value)
                    setConfig(prev => ({ ...prev, headers }))
                  } catch {}
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Request Body
              </label>
              <textarea
                value={config.body}
                onChange={(e) => setConfig(prev => ({ ...prev, body: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                rows={6}
                placeholder="JSON request body..."
              />
            </div>

            <button
              onClick={testAPI}
              disabled={loading}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Testing...
                </div>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Test API Call
                </>
              )}
            </button>
          </div>
        </div>

        {/* Response Preview & Actions */}
        <div className="bg-white rounded-lg shadow-lg p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Response Preview
          </h3>
          
          {response ? (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span className="font-medium text-green-800">API Call Successful</span>
                </div>
                <pre className="text-sm text-green-700 bg-green-100 p-3 rounded overflow-x-auto">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">UI Response Actions</h4>
                <div className="space-y-2">
                  <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Show Success Message</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Display: &ldquo;{response.message}&rdquo;
                    </div>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Clear Form</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Reset all input fields
                    </div>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Disable Button</span>
                      <input type="checkbox" className="rounded" />
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Prevent duplicate submissions
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/preview"
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
              >
                Preview Full Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-4">
                <Code className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-gray-600 text-sm">
                Test your API configuration to see the response preview
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Code Preview Section */}
      <div className="mt-8 bg-white rounded-lg shadow-lg border">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">Generated Code Preview</h3>
          <p className="text-sm text-gray-600">This is the code that would be generated for your component</p>
        </div>
        <div className="p-6">
          <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('${config.url}', {
      method: '${config.method}',
      headers: ${JSON.stringify(config.headers, null, 6)},
      body: JSON.stringify({
        message: formData.feedback,
        timestamp: new Date().toISOString()
      })
    });
    
    const result = await response.json();
    
    if (result.status === 'success') {
      setSuccessMessage(result.message);
      setFormData({ feedback: '' });
    }
  } catch (error) {
    console.error('API Error:', error);
  }
};`}</code>
          </pre>
        </div>
      </div>
    </DemoLayout>
  )
}
