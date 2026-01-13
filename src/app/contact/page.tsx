import ContactClient from './ContactClient';
import { buildMetadata } from '../_utils/seo';

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Contact Rantho Accommodations in Seshego, Polokwane. Call, WhatsApp, or use the NSFAS property page to book student accommodation.',
  path: '/contact',
  keywords: ['contact accommodation Seshego', 'WhatsApp booking', 'NSFAS Rantho properties'],
});

export default function ContactPage() {
  return <ContactClient />;
}
