import type { Metadata } from "next";
import { SEO_CONFIG } from "@/utils/seo-config";
import { BreadcrumbSchema } from "@/components/SEO/BreadcrumbSchema";
import WebProjectForm from "./WebProjectForm";

export const metadata: Metadata = {
  title: `${SEO_CONFIG.pages.cotizar?.title} | ${SEO_CONFIG.company.name}`,
  description: SEO_CONFIG.pages.cotizar?.description,
  keywords: SEO_CONFIG.pages.cotizar?.keywords,
  openGraph: {
    title: `${SEO_CONFIG.pages.cotizar?.title} | ${SEO_CONFIG.company.name}`,
    description: SEO_CONFIG.pages.cotizar?.description,
    url: `${SEO_CONFIG.company.url}/cotizar`,
    siteName: SEO_CONFIG.company.name,
    images: [
      {
        url: `${SEO_CONFIG.company.url}/og-cotizar.png`,
        width: 1200,
        height: 630,
        alt: "Cotizar Proyecto Web - Dev Code"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${SEO_CONFIG.pages.cotizar?.title} | ${SEO_CONFIG.company.name}`,
    description: SEO_CONFIG.pages.cotizar?.description,
    images: [`${SEO_CONFIG.company.url}/og-cotizar.png`]
  }
};

export default function CotizarPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://pmdevcode.com.ar' },
    { name: 'Cotizar Proyecto', url: 'https://pmdevcode.com.ar/cotizar' }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebProjectForm />
    </>
  );
}
