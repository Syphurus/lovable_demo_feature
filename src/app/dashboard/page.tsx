'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core'
import { MousePointer, Type, Square, ArrowRight } from 'lucide-react'
import DemoLayout from '@/components/DemoLayout'

interface Component {
  id: string
  type: 'button' | 'input' | 'text'
  x: number
  y: number
  label: string
}

const COMPONENT_TYPES = [
  { type: 'button' as const, icon: MousePointer, label: 'Button', color: 'bg-blue-100 text-blue-700' },
  { type: 'input' as const, icon: Type, label: 'Input Field', color: 'bg-green-100 text-green-700' },
  { type: 'text' as const, icon: Square, label: 'Text', color: 'bg-purple-100 text-purple-700' },
]

export default function Dashboard() {
  const [components, setComponents] = useState<Component[]>([])
  const [activeComponent, setActiveComponent] = useState<Component | null>(null)
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null)

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    const componentType = active.data.current?.type
    
    if (componentType) {
      const newComponent: Component = {
        id: `${componentType}-${Date.now()}`,
        type: componentType,
        x: 0,
        y: 0,
        label: componentType === 'button' ? 'Submit' : 
               componentType === 'input' ? 'Enter feedback...' : 
               'Success Message'
      }
      setActiveComponent(newComponent)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, delta } = event
    
    if (over && over.id === 'canvas' && activeComponent) {
      const canvasRect = document.getElementById('canvas')?.getBoundingClientRect()
      if (canvasRect) {
        const newComponent: Component = {
          ...activeComponent,
          x: Math.max(0, Math.min(delta.x + 100, canvasRect.width - 100)),
          y: Math.max(0, Math.min(delta.y + 100, canvasRect.height - 50)),
        }
        setComponents(prev => [...prev, newComponent])
      }
    }
    
    setActiveComponent(null)
  }

  const renderComponent = (component: Component, isDragging = false) => {
    const baseClasses = `absolute cursor-pointer transition-all duration-200 ${
      selectedComponent?.id === component.id ? 'ring-2 ring-blue-500' : ''
    } ${isDragging ? 'opacity-50' : ''}`

    switch (component.type) {
      case 'button':
        return (
          <button
            key={component.id}
            className={`${baseClasses} bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700`}
            style={{ left: component.x, top: component.y }}
            onClick={() => setSelectedComponent(component)}
          >
            {component.label}
          </button>
        )
      case 'input':
        return (
          <input
            key={component.id}
            type="text"
            placeholder={component.label}
            className={`${baseClasses} border border-gray-300 px-3 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            style={{ left: component.x, top: component.y }}
            onClick={() => setSelectedComponent(component)}
            readOnly
          />
        )
      case 'text':
        return (
          <div
            key={component.id}
            className={`${baseClasses} text-gray-700 font-medium`}
            style={{ left: component.x, top: component.y }}
            onClick={() => setSelectedComponent(component)}
          >
            {component.label}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <DemoLayout 
      title="UI Builder Canvas" 
      description="Drag components from the sidebar to build your interface"
    >
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex gap-6 h-[calc(100vh-140px)]">
          {/* Component Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-lg p-4 border">
            <h3 className="font-semibold text-gray-900 mb-4">Components</h3>
            <div className="space-y-2">
              {COMPONENT_TYPES.map((comp) => (
                <div
                  key={comp.type}
                  draggable
                  className={`${comp.color} p-3 rounded-lg cursor-grab active:cursor-grabbing border-2 border-transparent hover:border-gray-300 transition-all`}
                  onDragStart={(e) => {
                    e.dataTransfer.setData('component-type', comp.type)
                  }}
                  data-type={comp.type}
                >
                  <div className="flex items-center space-x-2">
                    <comp.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{comp.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Instructions */}
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-medium text-yellow-800 mb-2">Quick Start</h4>
              <div className="text-sm text-yellow-700 space-y-1">
                <p>1. Drag an input field here</p>
                <p>2. Add a button below it</p>
                <p>3. Click on a component</p>
                <p>4. Hit &ldquo;Connect to API&rdquo; →</p>
              </div>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 bg-white rounded-lg shadow-lg border relative overflow-hidden">
            <div
              id="canvas"
              className="w-full h-full relative bg-gray-50 bg-grid-pattern"
              onDrop={(e) => {
                e.preventDefault()
                const componentType = e.dataTransfer.getData('component-type') as Component['type']
                if (componentType) {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const newComponent: Component = {
                    id: `${componentType}-${Date.now()}`,
                    type: componentType,
                    x: e.clientX - rect.left - 50,
                    y: e.clientY - rect.top - 20,
                    label: componentType === 'button' ? 'Submit Feedback' : 
                           componentType === 'input' ? 'Enter your feedback...' : 
                           'Thank you for your feedback!'
                  }
                  setComponents(prev => [...prev, newComponent])
                }
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              {components.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <Square className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Drag stuff here to get started</p>
                  </div>
                </div>
              )}
              
              {components.map(component => renderComponent(component))}
            </div>
          </div>

          {/* Properties Panel */}
          <div className="w-64 bg-white rounded-lg shadow-lg p-4 border">
            <h3 className="font-semibold text-gray-900 mb-4">Properties</h3>
            
            {selectedComponent ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Component Type
                  </label>
                  <div className="text-sm text-gray-600 capitalize bg-gray-50 p-2 rounded">
                    {selectedComponent.type}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Label/Text
                  </label>
                  <input
                    type="text"
                    value={selectedComponent.label}
                    onChange={(e) => {
                      const updatedComponents = components.map(comp =>
                        comp.id === selectedComponent.id 
                          ? { ...comp, label: e.target.value }
                          : comp
                      )
                      setComponents(updatedComponents)
                      setSelectedComponent({ ...selectedComponent, label: e.target.value })
                    }}
                    className="w-full border border-gray-300 px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Position
                  </label>
                  <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                    X: {Math.round(selectedComponent.x)}px<br />
                    Y: {Math.round(selectedComponent.y)}px
                  </div>
                </div>

                <Link
                  href="/api-connect"
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  Connect to API <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                Select a component to view its properties
              </p>
            )}
          </div>
        </div>

        <DragOverlay>
          {activeComponent ? renderComponent(activeComponent, true) : null}
        </DragOverlay>
      </DndContext>
    </DemoLayout>
  )
}
