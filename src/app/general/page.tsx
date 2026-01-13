import GeneralClient from './GeneralClient';
import { buildMetadata } from '../_utils/seo';
import FaqSchema, { type FaqItem } from '../_components/FaqSchema';
import { siteConfig } from '../_config/site';

export const metadata = buildMetadata({
  title: 'General Accommodation — Seshego Zone 1',
  description:
    'General accommodation in Seshego Zone 1, Polokwane — bachelor and shared rooms with clear pricing and easy WhatsApp booking.',
  path: '/general',
  keywords: ['bachelor rooms Seshego', 'rooms to rent Seshego Zone 1', 'accommodation Polokwane Zone 1'],
});

const faqs: readonly FaqItem[] = [
  {
    question: 'Where is the general accommodation located?',
    answer: `${siteConfig.locations.general.street}, ${siteConfig.locations.general.locality}.`,
  },
  {
    question: 'What are the room prices?',
    answer:
      'Pricing varies by room type (shared house bed, standalone bachelor, or standalone rooms). See the “Rooms & pricing” section on this page for the latest amounts.',
  },
  {
    question: 'How do I book or enquire?',
    answer:
      'Use the WhatsApp booking button for the fastest response, or call us to confirm availability and next steps.',
  },
  {
    question: 'Do you offer bachelor rooms?',
    answer: 'Yes. There is a standalone bachelor option when available.',
  },
  {
    question: 'Is there a gallery of the rooms?',
    answer:
      'Yes—student images are live now. General accommodation images will be added as soon as they are uploaded.',
  },
];

export default function GeneralPage() {
  return (
    <>
      <GeneralClient />
      <FaqSchema pageUrl="/general" items={faqs} />
    </>
  );
}
