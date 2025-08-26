import ConsultoriaForm from '@/components/ConsultoriaForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulta de Asesoría IT | Patricio Millán - PmDevOps',
  description: 'Solicita asesoría especializada en automatización, chatbots IA, seguridad digital, charlas corporativas y consultoría IT profesional.',
  keywords: 'asesoría IT, consultoría tecnológica, automatización, chatbots IA, seguridad digital, auditoría IT, PmDevOps',
  openGraph: {
    title: 'Consulta de Asesoría IT Especializada',
    description: 'Obtén orientación técnica profesional para tu empresa con Patricio Millán - PmDevOps',
    type: 'website',
  }
};

export default function ConsultoriaPage() {
  return <ConsultoriaForm />;
}
