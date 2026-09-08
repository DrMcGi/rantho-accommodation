import GeneralClient from './GeneralClient';
import { buildMetadata } from '../_utils/seo';
import FaqSchema, { type FaqItem } from '../_components/FaqSchema';
import GeneralOfferSchema from '../_components/GeneralOfferSchema';
import { siteConfig } from '../_config/site';

export const metadata = buildMetadata({
  title: '4-Room House to Rent in Seshego — R3500',
  description:
    'Full 4-room house to rent in Seshego Zone 1, Polokwane from 1 October 2026. Two bedrooms, kitchen, dining room, communal outside toilet and bath. R3500 negotiable.',
  path: '/general',
  keywords: [
    '4 room house to rent Seshego',
    'four room house Seshego',
    'house to rent Seshego October 2026',
    'house to rent Polokwane R3500',
    '2 bedroom house Seshego',
    'affordable house to rent Seshego',
    'bachelor rooms Seshego',
    'rooms to rent Seshego Zone 1',
    'accommodation Polokwane Zone 1',
  ],
});

const faqs: readonly FaqItem[] = [
  {
    question: 'Where is the general accommodation located?',
    answer: `${siteConfig.locations.general.street}, ${siteConfig.locations.general.locality}.`,
  },
  {
    question: 'What are the room prices?',
    answer:
      'The full four-room house is available from 1 October 2026 for R3500, with the price negotiable. It includes two bedrooms, a kitchen and dining room, with a communal toilet and bath outside. Other room options are listed on this page when available.',
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
      <GeneralOfferSchema />
      <FaqSchema pageUrl="/general" items={faqs} />
    </>
  );
}
