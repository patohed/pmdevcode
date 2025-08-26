"use client";
import Script from "next/script";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema)
      }}
    />
  );
}

// Hook para generar breadcrumbs automáticamente
export function useBreadcrumbs(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Inicio', url: 'https://www.pmdevcode.com.ar' }
  ];
  
  let currentPath = '';
  segments.forEach(segment => {
    currentPath += `/${segment}`;
    let name = segment.charAt(0).toUpperCase() + segment.slice(1);
    
    // Mapeo de nombres más amigables
    const nameMap: Record<string, string> = {
      'servicios': 'Servicios',
      'portfolio': 'Portfolio',
      'contacto': 'Contacto',
      'formularios': 'Formularios Web',
      'nosotros': 'Nosotros',
      'blog': 'Blog'
    };
    
    if (nameMap[segment]) {
      name = nameMap[segment];
    }
    
    breadcrumbs.push({
      name,
      url: `https://www.pmdevcode.com.ar${currentPath}`
    });
  });
  
  return breadcrumbs;
}
