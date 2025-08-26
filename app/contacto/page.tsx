import type { Metadata } from 'next';
import { generatePageMetadata } from '../../utils/seo-config';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = generatePageMetadata('contacto');

export default function ContactPage() {
  return <ContactPageContent />;
}
