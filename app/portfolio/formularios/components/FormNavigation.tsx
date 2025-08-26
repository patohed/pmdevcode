import Link from "next/link";

interface NavigationProps {
  currentModel: string;
  models: Array<{
    id: string;
    name: string;
  }>;
}

const formModels = [
  { id: "minimalista", name: "MCP-A Minimalista" },
  { id: "wizard", name: "MCP-B Wizard" },
  { id: "dashboard", name: "MCP-C Dashboard" },
  { id: "cards", name: "MCP-D Cards" },
  { id: "sidenav", name: "MCP-E Side Nav" }
];

export default function FormNavigation({ currentModel }: { currentModel: string }) {
  const currentIndex = formModels.findIndex(model => model.id === currentModel);
  const prevModel = currentIndex > 0 ? formModels[currentIndex - 1] : null;
  const nextModel = currentIndex < formModels.length - 1 ? formModels[currentIndex + 1] : null;
  const currentModelData = formModels[currentIndex];

  return (
    <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600 transition-colors flex items-center">
            <span className="mr-1">🏠</span>
            Inicio
          </Link>
          <span>›</span>
          <Link href="/portfolio" className="hover:text-blue-600 transition-colors">
            Portfolio
          </Link>
          <span>›</span>
          <Link href="/portfolio/formularios" className="hover:text-blue-600 transition-colors">
            Formularios
          </Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">{currentModelData?.name}</span>
        </nav>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/portfolio/formularios">
              <button className="flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all font-medium">
                ← Galería
              </button>
            </Link>
            
            <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {currentIndex + 1} de {formModels.length}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {prevModel && (
              <Link href={`#${prevModel.id}`}>
                <button className="flex items-center px-3 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all text-sm">
                  ← {prevModel.name}
                </button>
              </Link>
            )}
            
            {nextModel && (
              <Link href={`#${nextModel.id}`}>
                <button className="flex items-center px-3 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all text-sm">
                  {nextModel.name} →
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
