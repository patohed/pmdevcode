import type { Metadata } from 'next';
import { generatePageMetadata } from '../../utils/seo-config';

export const metadata: Metadata = generatePageMetadata('portfolio');

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
