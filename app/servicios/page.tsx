import type { Metadata } from 'next';
import { generatePageMetadata } from '../../utils/seo-config';
import ServicesPageContent from './ServicesPageContent';

export const metadata: Metadata = generatePageMetadata('servicios');

export default function ServicesPage() {
  return <ServicesPageContent />;
}
