"use client";
import Script from "next/script";
import { SEO_CONFIG } from "../../utils/seo-config";

export function LocalBusinessSchema() {
  const company = SEO_CONFIG.company;
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${company.url}#organization`,
    "name": company.name,
    "legalName": company.legalName,
    "description": company.description,
    "url": company.url,
    "logo": `${company.url}${company.logo}`,
    "foundingDate": company.founded,
    "email": company.email,
    "owner": {
      "@type": "Organization",
      "name": "pmdevop",
      "url": "https://www.pmdevop.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": company.address.streetAddress,
      "addressLocality": company.address.addressLocality,
      "addressRegion": company.address.addressRegion,
      "postalCode": company.address.postalCode,
      "addressCountry": company.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": company.geo.latitude,
      "longitude": company.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      company.socialMedia.linkedin,
      company.socialMedia.instagram,
      company.socialMedia.twitter,
      company.socialMedia.facebook
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Argentina"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Buenos Aires"
      },
      {
        "@type": "City",
        "name": "Ciudad Autónoma de Buenos Aires"
      }
    ],
    "makesOffer": SEO_CONFIG.services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "category": service.category
      }
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Desarrollo Web",
      "itemListElement": SEO_CONFIG.services.map((service, index) => ({
        "@type": "OfferCatalog",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": SEO_CONFIG.reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": SEO_CONFIG.reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.text,
      "datePublished": review.date,
      "publisher": {
        "@type": "Organization",
        "name": review.company
      }
    }))
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema)
      }}
    />
  );
}
