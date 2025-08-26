"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import MCPMinimalista from "./components/MCPMinimalista";
import MCPWizard from "./components/MCPWizard";
import MCPDashboard from "./components/MCPDashboard";
import MCPCards from "./components/MCPCards";
import MCPSideNav from "./components/MCPSideNav";

const formModels = [
  {
    id: "minimalista",
    name: "MCP-A Minimalista",
    description: "Diseño centrado, una sola columna, estética sobria y moderna",
    component: MCPMinimalista,
    color: "bg-slate-50 border-slate-200"
  },
  {
    id: "wizard",
    name: "MCP-B Wizard",
    description: "Formulario multi-step con barra de progreso y navegación",
    component: MCPWizard,
    color: "bg-blue-50 border-blue-200"
  },
  {
    id: "dashboard",
    name: "MCP-C Dashboard",
    description: "Layout tipo dashboard con panel lateral y tabs",
    component: MCPDashboard,
    color: "bg-purple-50 border-purple-200"
  },
  {
    id: "cards",
    name: "MCP-D Cards",
    description: "Cada sección en tarjetas separadas con sombras",
    component: MCPCards,
    color: "bg-green-50 border-green-200"
  },
  {
    id: "sidenav",
    name: "MCP-E Side Navigation",
    description: "Navegación lateral con scroll y anclas dinámicas",
    component: MCPSideNav,
    color: "bg-orange-50 border-orange-200"
  }
];

export default function FormularioPortfolio() {
  const [selectedModel, setSelectedModel] = useState("minimalista");
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey) return; // Ignore if ctrl is pressed
      
      const currentIndex = formModels.findIndex(m => m.id === selectedModel);
      
      if (event.key === 'ArrowLeft' && currentIndex > 0) {
        event.preventDefault();
        setSelectedModel(formModels[currentIndex - 1].id);
      } else if (event.key === 'ArrowRight' && currentIndex < formModels.length - 1) {
        event.preventDefault();
        setSelectedModel(formModels[currentIndex + 1].id);
      } else if (event.key === 'Escape' && isPreviewMode) {
        event.preventDefault();
        setIsPreviewMode(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedModel, isPreviewMode]);

  const currentModel = formModels.find(model => model.id === selectedModel);
  const CurrentComponent = currentModel?.component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors flex items-center">
              <span className="mr-1">🏠</span>
              Inicio
            </Link>
            <span>›</span>
            <Link href="/portfolio" className="hover:text-blue-600 transition-colors">
              Portfolio
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Formularios</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Galería de Formularios - Portfolio
              </h1>
              <p className="text-slate-600 mt-1">
                5 modelos diferentes de formularios web profesionales
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/portfolio">
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all font-medium">
                  ← Volver al Portfolio
                </button>
              </Link>
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isPreviewMode 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isPreviewMode ? 'Salir Preview' : 'Modo Preview'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {!isPreviewMode ? (
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Model Selector */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Modelos Disponibles
                </h2>
                <div className="space-y-3">
                  {formModels.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModel(model.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedModel === model.id
                          ? `${model.color} border-black shadow-lg ring-2 ring-black/20 transform scale-[1.02]`
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium text-gray-900">
                          {model.name}
                        </div>
                        {selectedModel === model.id && (
                          <div className="text-black text-lg">
                            ✓
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-slate-600">
                        {model.description}
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-slate-100 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">ℹ️ Información</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Todos los modelos incluyen la misma información</li>
                    <li>• Diferentes estilos y layouts</li>
                    <li>• Completamente funcionales</li>
                    <li>• Responsive design</li>
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-medium text-blue-900 mb-2">⌨️ Atajos de Teclado</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">←</kbd> Modelo anterior</li>
                    <li>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">→</kbd> Modelo siguiente</li>
                    <li>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Esc</kbd> Salir del modo preview</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content - Form Preview */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${currentModel?.color.replace('bg-', 'bg-').replace('-50', '-400')} border-2 border-black`}></div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                          {currentModel?.name}
                          <span className="ml-2 text-green-600">✓</span>
                        </h2>
                        <p className="text-slate-600 mt-1">
                          {currentModel?.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* Previous Model Button */}
                      {formModels.findIndex(m => m.id === selectedModel) > 0 && (
                        <button
                          onClick={() => {
                            const currentIndex = formModels.findIndex(m => m.id === selectedModel);
                            setSelectedModel(formModels[currentIndex - 1].id);
                          }}
                          className="p-2 rounded-lg bg-white border-2 border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-black transition-all shadow-sm"
                          title="Modelo anterior"
                        >
                          ←
                        </button>
                      )}
                      
                      {/* Model Counter */}
                      <div className="text-sm font-medium text-slate-700 px-4 py-2 bg-white rounded-full border-2 border-black shadow-sm">
                        <span className="text-black">{formModels.findIndex(m => m.id === selectedModel) + 1}</span> de {formModels.length}
                      </div>
                      
                      {/* Next Model Button */}
                      {formModels.findIndex(m => m.id === selectedModel) < formModels.length - 1 && (
                        <button
                          onClick={() => {
                            const currentIndex = formModels.findIndex(m => m.id === selectedModel);
                            setSelectedModel(formModels[currentIndex + 1].id);
                          }}
                          className="p-2 rounded-lg bg-white border-2 border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-black transition-all shadow-sm"
                          title="Modelo siguiente"
                        >
                          →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-gray-50 min-h-[600px]">
                  {CurrentComponent && <CurrentComponent />}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Preview Mode - Full Screen
          <div className="fixed inset-0 bg-white z-40 overflow-auto">
            <div className="min-h-screen">
              {CurrentComponent && <CurrentComponent />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
